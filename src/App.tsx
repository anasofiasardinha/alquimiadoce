import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { OrigemSection } from './components/OrigemSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const ouroVarieties = [
    { name: 'Alinhamento Celeste', detail: 'Maçã & canela' },
    { name: 'Essência Primeva', detail: 'Massa de amêndoa' },
    { name: 'Eco Secreto', detail: 'Manga & cardamomo verde' },
    { name: 'Sopro Tardio', detail: 'Pêra & gengibre' },
    { name: 'Coração Alquímico', detail: 'Tâmara & cacau' },
  ];

  const essenciaFruits = [
    { name: 'Maçã Fuji', origin: 'Alcobaça' },
    { name: 'Laranja', origin: 'Algarve' },
    { name: 'Manga', origin: 'Brasil' },
    { name: 'Abacaxi', origin: 'Costa Rica' },
    { name: 'Banana', origin: 'América Latina' },
    { name: 'Kiwi', origin: 'Itália' },
  ];

  const ouroImages = [
    '/images/ouro-seal.jpeg',
    '/images/ouro-product.jpeg',
  ];

  const transmutacaoImages = [
    '/images/transmutacao-seal.jpeg',
    '/images/transmutacao-product.jpeg',
  ];

  const essenciaImages = [
    '/images/essencia-seal.jpeg',
    '/images/essencia-product.jpeg',
  ];

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-gold/20 scroll-smooth">
      <Header onCartClick={() => {}} />
      
      <main>
        <Hero />

        <Section 
          id="ouro"
          title="Ouro"
          phrase="Por fora, firme e escuro. Por dentro, macio e inesperado."
          description="Bombons artesanais de chocolate negro com recheio de fruta desidratada & massa de amêndoa."
          varieties={ouroVarieties}
          price="30€"
          images={ouroImages}
          theme="dark"
        />

        <Section 
          id="transmutacao"
          title="Transmutação"
          phrase="Juntámos 3 mundos, e a transformação começou. Novas personalidades emergiram."
          description="Fruta desidratada artesanal com chocolate negro 70% & massa de amêndoa."
          price="20€"
          images={transmutacaoImages}
          theme="brown"
        />

        <Section 
          id="essencia"
          title="Essência"
          phrase="Escolhemos fruta no ponto e deixámo-la falar por si. Desidratada pacientemente, em pequenos lotes."
          description="Fruta desidratada artesanal — pequenos lotes."
          fruits={essenciaFruits}
          price="10€"
          images={essenciaImages}
          theme="light"
        />

        <OrigemSection />
        
        <ContactSection />
      </main>

      <footer className="bg-brand-footer py-8 px-6 text-center border-t border-white/5">
        <p className="font-garamond italic text-[10px] tracking-[0.3em] text-brand-cream/20 uppercase">
          Alquimia Doce · Doces com Intenção
        </p>
      </footer>
    </div>
  );
}
