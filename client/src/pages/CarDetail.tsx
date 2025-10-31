import { useState } from 'react';
import { useRoute } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import BookTestDriveModal from '@/components/BookTestDriveModal';
import { Button } from '@/components/ui/button';
import { Heart, Gauge, Fuel, Cog, Calendar, Palette, Zap } from 'lucide-react';
import { carsData } from '@/data/cars';

export default function CarDetail() {
  const [, params] = useRoute('/cars/:id');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const car = carsData.find((c) => c.id === params?.id);

  if (!car) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <a href="/cars" className="text-gold hover:underline">
            Back to Listings
          </a>
        </div>
      </div>
    );
  }

  const relatedCars = carsData.filter(
    (c) => c.category === car.category && c.id !== car.id
  ).slice(0, 3);

  const specs = [
    { label: 'Price', value: `$${car.price.toLocaleString()}`, icon: Zap },
    { label: 'Year', value: car.year, icon: Calendar },
    { label: 'Engine', value: car.engine, icon: Cog },
    { label: 'Fuel Type', value: car.fuelType, icon: Fuel },
    { label: 'Transmission', value: car.transmission, icon: Gauge },
    { label: 'Color', value: car.color, icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={car.images[currentImageIndex]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  data-testid="img-car-main"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-gold scale-105'
                        : 'border-transparent hover:border-slate-300'
                    }`}
                    data-testid={`button-thumbnail-${index}`}
                  >
                    <img
                      src={image}
                      alt={`${car.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4" data-testid="text-car-name">
                {car.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gold" data-testid="text-car-price">
                  ${car.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500">{car.year}</span>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {car.description}
              </p>

              <div className="flex gap-4 mb-12">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  size="lg"
                  className="flex-1 bg-gold text-black hover:bg-gold-dark px-8 py-6 text-base font-semibold uppercase tracking-wider"
                  data-testid="button-book-test-drive"
                >
                  Book Test Drive
                </Button>
                <Button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  size="lg"
                  variant="outline"
                  className={`px-8 py-6 ${isWishlisted ? 'bg-gold text-black border-gold' : ''}`}
                  data-testid="button-add-wishlist"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-black mb-6">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={spec.label}
                        className="p-4 bg-slate-50 rounded-lg"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-gold" />
                          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                            {spec.label}
                          </span>
                        </div>
                        <p className="text-lg font-semibold text-black" data-testid={`text-spec-${spec.label.toLowerCase().replace(' ', '-')}`}>
                          {spec.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {relatedCars.length > 0 && (
            <div>
              <h2 className="text-3xl font-serif font-bold text-black mb-8">
                Related Vehicles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedCars.map((relatedCar) => (
                  <CarCard key={relatedCar.id} car={relatedCar} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <BookTestDriveModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        carName={car.name}
      />

      <Footer />
    </div>
  );
}
