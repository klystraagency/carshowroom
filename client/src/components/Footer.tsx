import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-serif font-bold mb-4">
              Elite <span className="text-gold">Motors</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience luxury redefined. We offer the finest selection of premium vehicles with personalized service that exceeds expectations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-gold transition-colors" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="/cars" className="text-gray-400 hover:text-gold transition-colors" data-testid="link-footer-cars">
                  Browse Cars
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-gold transition-colors" data-testid="link-footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-gold transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Connect With Us</h3>
            <p className="text-gray-400 mb-4">
              123 Luxury Avenue<br />
              Beverly Hills, CA 90210<br />
              (555) 123-4567
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                data-testid="link-facebook"
                onClick={(e) => { e.preventDefault(); console.log('Facebook clicked'); }}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                data-testid="link-instagram"
                onClick={(e) => { e.preventDefault(); console.log('Instagram clicked'); }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                data-testid="link-twitter"
                onClick={(e) => { e.preventDefault(); console.log('Twitter clicked'); }}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold transition-colors"
                data-testid="link-youtube"
                onClick={(e) => { e.preventDefault(); console.log('Youtube clicked'); }}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            © 2024 Klystra Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
