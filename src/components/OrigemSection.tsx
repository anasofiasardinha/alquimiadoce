import React from 'react';
import { motion } from 'motion/react';

export const OrigemSection: React.FC = () => {
  return (
    <section id="origem" className="py-32 px-6 kraft-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-brown/10" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-[10px] tracking-[0.5em] text-brand-brown/40 uppercase block mb-12">
            A Nossa História
          </span>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl font-garamond italic text-brand-brown/80 leading-relaxed">
              "Começou como uma prenda."
            </p>
            <p className="text-2xl md:text-3xl font-garamond italic text-brand-brown/60 leading-relaxed">
              "Ficou como ofício."
            </p>
            <p className="text-2xl md:text-3xl font-garamond italic text-brand-brown/60 leading-relaxed">
              "Pequenos lotes. Feito à mão. Com intenção."
            </p>
          </div>

          <div className="mt-16 w-12 h-px bg-brand-brown/20 mx-auto" />
          
          <p className="mt-12 text-sm uppercase font-cinzel tracking-[0.2em] text-brand-brown/30">
            Cada lote é feito à mão e em quantidade limitada
          </p>
        </motion.div>
      </div>
    </section>
  );
};
