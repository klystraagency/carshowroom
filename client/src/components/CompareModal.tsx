import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Car } from '@/data/cars';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: Car[];
}

export default function CompareModal({ isOpen, onClose, cars }: CompareModalProps) {
  const [car1, car2] = cars.slice(0, 2);

  if (!car1 || !car2) return null;

  const specs = [
    { label: 'Price', key: 'price', format: (val: number) => `$${val.toLocaleString()}` },
    { label: 'Year', key: 'year' },
    { label: 'Engine', key: 'engine' },
    { label: 'Fuel Type', key: 'fuelType' },
    { label: 'Transmission', key: 'transmission' },
    { label: 'Mileage', key: 'mileage', format: (val: number) => `${val} mi` },
    { label: 'Color', key: 'color' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif font-bold text-black mb-4">
            Compare Vehicles
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {[car1, car2].map((car) => (
            <div key={car.id} className="space-y-4">
              <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
                <img
                  src={car.images[0]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black" data-testid={`text-compare-car-${car.id}`}>
                {car.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {specs.map((spec) => (
            <div key={spec.label} className="grid md:grid-cols-3 gap-4 py-3 border-b border-slate-200">
              <div className="font-semibold text-gray-700 uppercase text-sm tracking-wide">
                {spec.label}
              </div>
              <div className="text-black" data-testid={`text-spec1-${spec.key}`}>
                {spec.format ? spec.format(car1[spec.key as keyof Car] as number) : car1[spec.key as keyof Car]}
              </div>
              <div className="text-black" data-testid={`text-spec2-${spec.key}`}>
                {spec.format ? spec.format(car2[spec.key as keyof Car] as number) : car2[spec.key as keyof Car]}
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={onClose}
          className="mt-6 w-full bg-gold text-black hover:bg-gold-dark font-semibold uppercase tracking-wider"
          data-testid="button-close-compare"
        >
          Close Comparison
        </Button>
      </DialogContent>
    </Dialog>
  );
}
