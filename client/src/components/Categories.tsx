import { Car, Truck, Zap, Trophy } from 'lucide-react';

const categories = [
  { name: 'SUV', icon: Truck, count: 12 },
  { name: 'Sedan', icon: Car, count: 18 },
  { name: 'Electric', icon: Zap, count: 8 },
  { name: 'Sports', icon: Trophy, count: 6 },
];

export default function Categories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-4">
            Browse by <span className="text-gold">Category</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find your perfect vehicle in our curated collections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => console.log(`${category.name} category clicked`)}
                className="group relative p-8 bg-white border border-slate-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-elevate active-elevate-2"
                data-testid={`button-category-${category.name.toLowerCase()}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-slate-100 rounded-full group-hover:bg-gold transition-colors">
                    <Icon className="h-8 w-8 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} vehicles
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
