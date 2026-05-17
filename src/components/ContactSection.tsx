import React from 'react';
import { Instagram, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-32 px-6 bg-brand-cream-dark text-brand-brown">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair mb-6">Fala connosco.</h2>
          <p className="text-xl font-garamond italic text-brand-brown/60 mb-12 max-w-sm mx-auto">
            Escolhe a tua linha e encomendamos juntos. Para encomendar, fala connosco directamente.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://wa.me/351939320103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-12 py-5 bg-brand-bordeaux text-brand-cream font-cinzel text-xs tracking-widest uppercase hover:bg-brand-bordeaux/90 transition-all duration-300 w-full md:w-auto"
            >
              <Phone size={16} />
              WhatsApp
            </a>
            <a 
              href="https://instagram.com/alquimiadoce.artesanal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-12 py-5 border-1.5 border-brand-brown text-brand-brown font-cinzel text-xs tracking-widest uppercase hover:bg-brand-brown hover:text-brand-cream transition-all duration-300 w-full md:w-auto"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>

          <div className="mt-24 space-y-2">
            <p className="font-cinzel text-[10px] tracking-[0.4em] uppercase opacity-30">
              Alquimia Doce
            </p>
            <p className="font-garamond italic text-xs tracking-widest opacity-20">
              Doces com Intenção · Amadora, Portugal · © 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
