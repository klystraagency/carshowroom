import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterBarProps {
  onFilterChange?: (filters: any) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [make, setMake] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    console.log('Searching with filters:', { searchTerm, make, fuelType, transmission, priceRange });
    onFilterChange?.({ searchTerm, make, fuelType, transmission, priceRange });
  };

  return (
    <div className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by name or model..."
                className="pl-10 h-12 rounded-lg border-slate-300 focus:border-gold focus:ring-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <Select value={make} onValueChange={setMake}>
            <SelectTrigger className="h-12 rounded-lg border-slate-300" data-testid="select-make">
              <SelectValue placeholder="Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Makes</SelectItem>
              <SelectItem value="elite">Elite</SelectItem>
              <SelectItem value="prestige">Prestige</SelectItem>
              <SelectItem value="velocity">Velocity</SelectItem>
              <SelectItem value="apex">Apex</SelectItem>
            </SelectContent>
          </Select>

          <Select value={fuelType} onValueChange={setFuelType}>
            <SelectTrigger className="h-12 rounded-lg border-slate-300" data-testid="select-fuel">
              <SelectValue placeholder="Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="gasoline">Gasoline</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
            </SelectContent>
          </Select>

          <Select value={transmission} onValueChange={setTransmission}>
            <SelectTrigger className="h-12 rounded-lg border-slate-300" data-testid="select-transmission">
              <SelectValue placeholder="Transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="automatic">Automatic</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleSearch}
            className="h-12 bg-gold text-black hover:bg-gold-dark font-semibold uppercase tracking-wider rounded-lg"
            data-testid="button-search-submit"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
