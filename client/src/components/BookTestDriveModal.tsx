import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface BookTestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName?: string;
}

export default function BookTestDriveModal({ isOpen, onClose, carName }: BookTestDriveModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Test drive booking submitted:', { ...formData, carName });
    alert(`Thank you! Your test drive for ${carName} has been scheduled.`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold text-black mb-2">
            Book a Test Drive
          </DialogTitle>
          <p className="text-gray-600">
            {carName && `Experience the ${carName} firsthand`}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
              data-testid="input-name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
              data-testid="input-email"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
              data-testid="input-phone"
            />
          </div>

          <div>
            <Label htmlFor="date" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
              Preferred Date
            </Label>
            <Input
              id="date"
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
              data-testid="input-date"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-14 bg-gold text-black hover:bg-gold-dark font-semibold uppercase tracking-wider rounded-lg"
            data-testid="button-submit-booking"
          >
            Schedule Test Drive
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
