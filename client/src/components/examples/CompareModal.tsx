import { useState } from 'react';
import CompareModal from '../CompareModal';
import { Button } from '@/components/ui/button';
import { carsData } from '@/data/cars';

export default function CompareModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Compare Cars</Button>
      <CompareModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        cars={carsData.slice(0, 2)}
      />
    </div>
  );
}
