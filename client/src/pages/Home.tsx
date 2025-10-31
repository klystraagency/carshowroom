import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedCars />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
