import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Executive',
    content: 'Elite Motors provided an exceptional buying experience. The team was professional, knowledgeable, and made the entire process seamless. My new vehicle exceeds all expectations!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Entrepreneur',
    content: 'Outstanding service and an incredible selection of premium vehicles. The personalized attention and expertise helped me find the perfect car for my lifestyle.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Tech Executive',
    content: 'From the moment I walked in, I knew I was in the right place. The luxury showroom, expert staff, and premium vehicles create an unmatched experience.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-400">
            Trusted by discerning customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-white" data-testid={`text-testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
