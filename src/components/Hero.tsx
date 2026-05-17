import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_2.png" 
          alt="Bombons Ouro no tabuleiro" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/40 via-brand-brown/60 to-brand-brown/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Monogram */}
          <div className="w-20 h-20 border-2 border-brand-gold rounded-full flex items-center justify-center mb-8">
            <span className="font-cinzel text-brand-gold text-4xl font-bold">A</span>
          </div>

          <h1 className="font-cinzel font-bold text-4xl md:text-6xl lg:text-7xl tracking-[0.25em] text-brand-cream uppercase mb-4">
            Alquimia Doce
          </h1>
          
          <p className="font-cinzel text-brand-gold text-sm md:text-lg tracking-[0.4em] uppercase mb-12 opacity-80">
            Doces com Intenção
          </p>

          <a 
            href="#ouro"
            className="group relative inline-flex items-center justify-center px-10 py-4 border border-brand-gold/60 text-brand-gold font-cinzel text-xs tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden hover:border-brand-gold"
          >
            <span className="relative z-10">Descobrir</span>
            <div className="absolute inset-0 bg-brand-gold/5 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-gold/40 to-brand-gold/80" />
      </motion.div>
    </section>
  );
};
