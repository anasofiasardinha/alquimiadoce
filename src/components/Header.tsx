import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Ouro', href: '#ouro' },
    { label: 'Transmutação', href: '#transmutacao' },
    { label: 'Essência', href: '#essencia' },
    { label: 'Origem', href: '#origem' },
    { label: 'Encontrar-nos', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown/5 ${
        isScrolled ? 'py-2 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-brand-bordeaux rounded-full flex items-center justify-center text-brand-bordeaux font-cinzel font-bold text-xl transition-all duration-300 group-hover:bg-brand-bordeaux group-hover:text-white">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-lg md:text-xl tracking-widest text-brand-bordeaux uppercase leading-none">
              Alquimia Doce
            </span>
          </div>
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

        {/* Purchase button hidden but code kept */}
        <a 
          href="https://wa.me/351939320103" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block py-2 px-6 border border-brand-bordeaux text-brand-bordeaux font-cinzel text-[10px] tracking-widest uppercase hover:bg-brand-bordeaux hover:text-white transition-all duration-300"
        >
          Encomendar
        </a>
      </div>
    </header>
  );
};
