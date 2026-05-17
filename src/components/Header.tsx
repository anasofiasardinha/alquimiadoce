import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Ouro', href: '#ouro' },
    { label: 'Transmutação', href: '#transmutacao' },
    { label: 'Essência', href: '#essencia' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown/5 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img src="/images/AD_logo.svg" alt="Alquimia Doce" className="h-10 md:h-12" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="font-garamond text-sm uppercase tracking-widest text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/351939320103" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </a>
          <a 
            href="https://instagram.com/alquimiadoce.artesanal" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden p-2 text-brand-brown"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-brand-cream/95 backdrop-blur-md border-t border-brand-brown/5"
          >
            <div className="flex flex-col items-center py-6 gap-5">
              {menuItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-garamond text-sm uppercase tracking-widest text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4">
                <a 
                  href="https://wa.me/351939320103" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={22} />
                </a>
                <a 
                  href="https://instagram.com/alquimiadoce.artesanal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-brown/70 hover:text-brand-bordeaux transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
