import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cars', label: 'Cars' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <a className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-white">
                Elite <span className="text-gold">Motors</span>
              </div>
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-${link.label.toLowerCase()}`}>
                <a
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive(link.href)
                      ? 'text-gold'
                      : 'text-white hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-gold"
              data-testid="button-search"
              onClick={() => console.log('Search clicked')}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-gold"
              data-testid="button-wishlist"
              onClick={() => console.log('Wishlist clicked')}
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.label.toLowerCase()}`}>
                <a
                  className={`block text-base font-semibold uppercase tracking-wider ${
                    isActive(link.href) ? 'text-gold' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <Button
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white hover:text-black"
                data-testid="button-mobile-search"
              >
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white hover:text-black"
                data-testid="button-mobile-wishlist"
              >
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
