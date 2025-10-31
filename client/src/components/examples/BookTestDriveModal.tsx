import { useState } from 'react';
import BookTestDriveModal from '../BookTestDriveModal';
import { Button } from '@/components/ui/button';

export default function BookTestDriveModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <BookTestDriveModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        carName="Phantom Elite GT"
      />
    </div>
  );
}
