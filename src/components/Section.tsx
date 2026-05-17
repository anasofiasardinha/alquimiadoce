import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Product {
  name: string;
  detail: string;
}

interface SectionProps {
  id: string;
  title: string;
  phrase: string;
  description: string;
  varieties?: Product[];
  fruits?: { name: string; origin: string }[];
  price: string;
  images: string[];
  theme: 'dark' | 'light' | 'brown';
}

export const Section: React.FC<SectionProps> = ({ 
  id, title, phrase, description, varieties, fruits, price, images, theme 
}) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const isDark = theme === 'dark' || theme === 'brown';
  
  const bgClass = theme === 'dark' ? 'bg-brand-footer text-brand-cream' : 
                  theme === 'brown' ? 'bg-brand-brown text-brand-cream' : 
                  'bg-brand-cream-dark text-brand-brown';

  return (
    <section id={id} className={`py-32 px-6 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className={`text-[10px] tracking-[0.5em] uppercase opacity-60 mb-6 block ${isDark ? 'text-brand-gold' : 'text-brand-bordeaux'}`}>
                {title === 'Ouro' ? 'Especiarias, flor de sal, e um toque de ouro.' : 
                 title === 'Transmutação' ? 'Três mundos reunidos' : 'A origem de tudo'}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-8 leading-tight">
                {title}
              </h2>
              <p className={`text-xl md:text-2xl font-garamond italic leading-relaxed mb-12 max-w-2xl mx-auto ${isDark ? 'text-brand-cream/70' : 'text-brand-brown/70'}`}>
                "{phrase}"
              </p>
              
              <div className={`w-12 h-px mb-12 mx-auto ${isDark ? 'bg-brand-gold/30' : 'bg-brand-bordeaux/30'}`} />
              
              <p className={`text-lg font-garamond leading-relaxed mb-12 max-w-xl mx-auto ${isDark ? 'text-brand-cream/60' : 'text-brand-brown/60'}`}>
                {description}
              </p>

              {/* Varieties (Ouro) */}
              {varieties && (
                <div className="space-y-6 mb-12 max-w-md mx-auto text-left">
                  {varieties.map((v) => (
                    <div key={v.name} className="flex justify-between items-baseline border-b border-white/5 pb-2">
                      <span className="font-garamond text-lg">{v.name}</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-40 italic">{v.detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Fruits (Essência) */}
              {fruits && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12 max-w-2xl mx-auto text-left">
                  {fruits.map((f) => (
                    <div key={f.name} className="flex justify-between items-baseline border-b border-black/5 pb-2">
                      <span className="font-garamond text-lg">{f.name}</span>
                      <span className="text-[10px] uppercase tracking-widest opacity-40 italic">{f.origin}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col items-center gap-2 mb-10">
                <span className="text-4xl font-cinzel tracking-tight">{price}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Lote artesanal limitado</span>
              </div>

              <div className="flex justify-center">
                <a 
                  href="https://wa.me/351939320103"
                  className={`px-12 py-5 font-cinzel text-xs tracking-widest uppercase transition-all duration-300 ${
                    isDark ? 'border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-brown shadow-lg shadow-black/20' : 
                    'border border-brand-brown/30 text-brand-brown hover:bg-brand-brown hover:text-brand-cream'
                  }`}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Images (PC: Horizontal Gallery / Mobile: Carousel) */}
          <div className="w-full">
            {/* Desktop Gallery: 3-4 images in a row */}
            <div className="hidden lg:grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {images.map((img, i) => {
                const isProduct = i === 1;
                const aspectClass = isProduct && (id === 'essencia' || id === 'transmutacao') ? 'aspect-[4/3]' : 'aspect-[3/4]';
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`${aspectClass} overflow-hidden group shadow-2xl shadow-black/20 cursor-pointer`}
                    onClick={() => setLightboxImg(img)}
                  >
                    <img 
                      src={img} 
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 brightness-90 saturate-[0.8]" 
                      alt={title}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Carousel (Horizontal Scroll) */}
            <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 no-scrollbar">
              {images.map((img, i) => {
                const isProduct = i === 1;
                const aspectClass = isProduct && (id === 'essencia' || id === 'transmutacao') ? 'aspect-[4/3]' : 'aspect-[3/4]';
                return (
                  <div key={i} className={`flex-shrink-0 w-[75vw] ${aspectClass} snap-center shadow-xl shadow-black/10 cursor-pointer`} onClick={() => setLightboxImg(img)}>
                    <img src={img} className="w-full h-full object-contain brightness-90 saturate-[0.8]" alt={title} />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImg}
              alt={title}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
