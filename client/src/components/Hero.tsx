import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/Luxury_sports_car_hero_image_6df1e185.png';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Experience <span className="text-gold">Luxury</span>
          <br />
          in Motion
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover our exclusive collection of premium vehicles, where performance meets elegance
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/cars">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold-dark px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg transition-all hover:-translate-y-1"
              data-testid="button-explore-cars"
            >
              Explore Cars
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base font-semibold uppercase tracking-wider rounded-lg backdrop-blur-sm bg-white/10"
            data-testid="button-learn-more"
            onClick={() => console.log('Learn more clicked')}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
