import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, Fuel, Gauge } from 'lucide-react';
import type { Car } from '@/data/cars';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gold hover:text-white transition-all"
          onClick={() => console.log(`Added ${car.name} to wishlist`)}
          data-testid={`button-wishlist-${car.id}`}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-1" data-testid={`text-car-name-${car.id}`}>
              {car.name}
            </h3>
            <p className="text-sm text-gray-500">{car.year}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gold" data-testid={`text-price-${car.id}`}>
              ${car.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/cars/${car.id}`} className="w-full">
          <Button
            className="w-full bg-black text-white hover:bg-gold hover:text-black transition-all"
            data-testid={`button-view-details-${car.id}`}
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
