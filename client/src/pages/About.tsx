import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Shield, Users, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We curate only the finest vehicles that meet our exacting standards of quality and performance.',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage.',
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Our dedicated team provides personalized attention to ensure your complete satisfaction.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We share your love for exceptional automobiles and the lifestyle they represent.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="text-gold">Elite Motors</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where luxury meets performance in the world's finest automobiles
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-serif font-bold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to redefine the luxury automotive experience, Elite Motors has become the destination for discerning customers who demand nothing but the best.
                </p>
                <p>
                  For over two decades, we've built our reputation on three pillars: exceptional vehicles, uncompromising quality, and personalized service that exceeds expectations.
                </p>
                <p>
                  Our showroom features an exclusive collection of premium vehicles from the world's most prestigious manufacturers, each carefully selected to meet the exacting standards our clients expect.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-black mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Elite Motors, we understand that purchasing a luxury vehicle is more than a transaction—it's an investment in your lifestyle and passion.
                </p>
                <p>
                  Our team of automotive specialists brings decades of combined experience, offering expert guidance to help you find the perfect vehicle that matches your unique preferences and requirements.
                </p>
                <p>
                  From the moment you step into our showroom to long after you drive away, we're committed to providing an experience that's as exceptional as the vehicles we represent.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-serif font-bold text-black text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="text-center p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
