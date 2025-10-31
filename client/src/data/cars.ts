export interface Car {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  category: 'SUV' | 'Sedan' | 'Hatchback' | 'Electric' | 'Sports' | 'Crossover';
  fuelType: 'Gasoline' | 'Electric' | 'Hybrid' | 'Diesel';
  transmission: 'Automatic' | 'Manual';
  mileage: number;
  color: string;
  engine: string;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
}

import heroImage from '@assets/generated_images/Luxury_sports_car_hero_image_6df1e185.png';
import suvImage from '@assets/generated_images/White_luxury_SUV_product_shot_0c65216d.png';
import sedanImage from '@assets/generated_images/Silver_luxury_sedan_product_shot_890b1671.png';
import sportsImage from '@assets/generated_images/Red_luxury_sports_coupe_6dd2d1c3.png';
import hatchbackImage from '@assets/generated_images/White_electric_hatchback_b3b5cfe0.png';
import crossoverImage from '@assets/generated_images/Black_luxury_crossover_SUV_cebce3cc.png';

export const carsData: Car[] = [
  {
    id: '1',
    name: 'Phantom Elite GT',
    make: 'Elite',
    model: 'Phantom GT',
    year: 2024,
    price: 149999,
    category: 'Sports',
    fuelType: 'Electric',
    transmission: 'Automatic',
    mileage: 312,
    color: 'Midnight Black',
    engine: 'Dual Motor Electric',
    description: 'Experience the pinnacle of electric performance with the Phantom Elite GT. This stunning sports car combines breathtaking acceleration with zero emissions, delivering 0-60 mph in just 2.1 seconds. Premium materials and cutting-edge technology create an unforgettable driving experience.',
    features: ['Autopilot', 'Premium Sound System', 'Carbon Fiber Interior', 'Adaptive Air Suspension', 'Panoramic Glass Roof'],
    images: [heroImage, heroImage, heroImage],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Prestige X7 SUV',
    make: 'Prestige',
    model: 'X7',
    year: 2024,
    price: 89999,
    category: 'SUV',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: 28,
    color: 'Pearl White',
    engine: '3.0L Twin-Turbo V6 Hybrid',
    description: 'The Prestige X7 SUV redefines luxury in the full-size SUV segment. With seating for seven, advanced safety features, and a powerful hybrid powertrain, this vehicle offers the perfect blend of capability and refinement for discerning families.',
    features: ['7-Passenger Seating', 'Adaptive Cruise Control', 'Massaging Seats', 'Night Vision', 'Wireless Charging'],
    images: [suvImage, suvImage, suvImage],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Velocity S-Class',
    make: 'Velocity',
    model: 'S-Class',
    year: 2024,
    price: 119999,
    category: 'Sedan',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 24,
    color: 'Platinum Silver',
    engine: '4.0L V8 BiTurbo',
    description: 'The Velocity S-Class represents the ultimate in executive transportation. Handcrafted luxury meets cutting-edge innovation in this flagship sedan, offering unparalleled comfort and performance for those who accept nothing but the best.',
    features: ['Executive Rear Seats', 'Burmester 3D Sound', 'Active Multicontour Seats', 'Magic Body Control', 'Ambient Lighting'],
    images: [sedanImage, sedanImage, sedanImage],
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Apex R8 Coupe',
    make: 'Apex',
    model: 'R8',
    year: 2023,
    price: 179999,
    category: 'Sports',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 15,
    color: 'Racing Red',
    engine: '5.2L V10',
    description: 'Pure driving excitement awaits in the Apex R8 Coupe. This mid-engine masterpiece delivers 602 horsepower through a naturally aspirated V10 engine, creating an intoxicating symphony of power and precision.',
    features: ['Carbon Ceramic Brakes', 'Virtual Cockpit Plus', 'Sport Exhaust', 'Magnetic Ride', 'Leather/Alcantara Interior'],
    images: [sportsImage, sportsImage, sportsImage],
  },
  {
    id: '5',
    name: 'EcoLine E-Hatch',
    make: 'EcoLine',
    model: 'E-Hatch',
    year: 2024,
    price: 44999,
    category: 'Hatchback',
    fuelType: 'Electric',
    transmission: 'Automatic',
    mileage: 280,
    color: 'Arctic White',
    engine: 'Single Motor Electric',
    description: 'The EcoLine E-Hatch makes premium electric mobility accessible. With a range of 280 miles and rapid charging capability, this stylish hatchback is perfect for urban explorers who demand both sustainability and sophistication.',
    features: ['Fast Charging', 'Heat Pump', 'Vegan Interior', 'Smart Navigation', 'Augmented Reality HUD'],
    images: [hatchbackImage, hatchbackImage, hatchbackImage],
  },
  {
    id: '6',
    name: 'Urban Rover Elite',
    make: 'Urban',
    model: 'Rover Elite',
    year: 2024,
    price: 72999,
    category: 'Crossover',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: 32,
    color: 'Shadow Black',
    engine: '2.5L Turbo Hybrid',
    description: 'The Urban Rover Elite brings luxury to the compact crossover segment. Perfectly sized for city living yet capable of weekend adventures, this vehicle offers premium features in an efficient, elegant package.',
    features: ['Hands-Free Liftgate', '360-Degree Camera', 'Ventilated Seats', 'Premium Audio', 'Digital Key'],
    images: [crossoverImage, crossoverImage, crossoverImage],
  },
];
