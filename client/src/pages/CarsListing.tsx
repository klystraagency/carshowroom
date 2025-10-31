import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import CarCard from '@/components/CarCard';
import CompareModal from '@/components/CompareModal';
import { Button } from '@/components/ui/button';
import { carsData } from '@/data/cars';

export default function CarsListing() {
  const [visibleCars, setVisibleCars] = useState(6);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCars, setSelectedCars] = useState<string[]>([]);

  const loadMore = () => {
    setVisibleCars((prev) => Math.min(prev + 3, carsData.length));
  };

  const toggleCompare = (carId: string) => {
    setSelectedCars((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : prev.length < 2
        ? [...prev, carId]
        : prev
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="bg-black text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">
              Our <span className="text-gold">Collection</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover premium vehicles tailored to your lifestyle
            </p>
          </div>
        </div>

        <FilterBar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Showing {visibleCars} of {carsData.length} vehicles
            </p>
            <Button
              variant={compareMode ? 'default' : 'outline'}
              className={compareMode ? 'bg-gold text-black' : ''}
              onClick={() => setCompareMode(!compareMode)}
              data-testid="button-toggle-compare"
            >
              {compareMode ? 'Exit Compare' : 'Compare Cars'}
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carsData.slice(0, visibleCars).map((car) => (
              <div key={car.id} className="relative">
                {compareMode && (
                  <div className="absolute top-4 left-4 z-10">
                    <input
                      type="checkbox"
                      checked={selectedCars.includes(car.id)}
                      onChange={() => toggleCompare(car.id)}
                      className="h-6 w-6 rounded border-2 border-gold accent-gold"
                      data-testid={`checkbox-compare-${car.id}`}
                    />
                  </div>
                )}
                <CarCard car={car} />
              </div>
            ))}
          </div>

          {visibleCars < carsData.length && (
            <div className="text-center mt-12">
              <Button
                onClick={loadMore}
                size="lg"
                className="bg-black text-white hover:bg-gold hover:text-black px-12 py-6 text-base font-semibold uppercase tracking-wider"
                data-testid="button-load-more"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>

      <CompareModal
        isOpen={compareMode && selectedCars.length === 2}
        onClose={() => {
          setSelectedCars([]);
          setCompareMode(false);
        }}
        cars={carsData.filter((car) => selectedCars.includes(car.id))}
      />

      <Footer />
    </div>
  );
}
