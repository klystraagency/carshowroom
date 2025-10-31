import CarCard from '../CarCard';
import { carsData } from '@/data/cars';

export default function CarCardExample() {
  return (
    <div className="p-8 bg-slate-50">
      <div className="max-w-sm">
        <CarCard car={carsData[0]} />
      </div>
    </div>
  );
}
