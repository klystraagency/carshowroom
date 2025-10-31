import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CarCard from '@/components/CarCard';
import { carsData } from '@/data/cars';

export default function FeaturedCars() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredCars = carsData.filter(car => car.isFeatured);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
            Featured <span className="text-gold">Vehicles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked premium vehicles that represent the pinnacle of automotive excellence
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredCars.map((car) => (
                <div key={car.id} className="w-full flex-shrink-0 px-4">
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </div>

          <Button
            size="icon"
            variant="outline"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border-gray-300 hover:bg-gold hover:border-gold hover:text-white h-12 w-12 rounded-full shadow-lg"
            onClick={prevSlide}
            data-testid="button-prev-slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border-gray-300 hover:bg-gold hover:border-gold hover:text-white h-12 w-12 rounded-full shadow-lg"
            onClick={nextSlide}
            data-testid="button-next-slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-8 space-x-2">
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gray-300'
                }`}
                data-testid={`button-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
