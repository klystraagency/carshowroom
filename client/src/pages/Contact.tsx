import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Luxury Avenue', 'Beverly Hills, CA 90210'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Mon-Sat: 9AM - 7PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@elitemotors.com', 'sales@elitemotors.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9AM - 7PM', 'Sat-Sun: 10AM - 6PM'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-black mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 aspect-video bg-slate-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1907193555944!2d-118.40058368478713!3d34.06942208060586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc85670d49b3%3A0x7b1b5d8c3c7e9f9e!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Elite Motors Location"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-black mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
                    data-testid="input-contact-name"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
                    data-testid="input-contact-email"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-phone" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
                    Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
                    data-testid="input-contact-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message" className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="resize-none px-6 rounded-lg border-2 border-slate-300 focus:border-gold"
                    data-testid="input-contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-gold text-black hover:bg-gold-dark font-semibold uppercase tracking-wider rounded-lg"
                  data-testid="button-submit-contact"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
