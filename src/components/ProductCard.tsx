import React from 'react';
import { Product } from '../types';
import { Plus, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-brand-paper mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        
        <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full py-3 bg-white text-stone-900 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-brand-red hover:text-white transition-colors"
          >
            <Plus size={18} />
            Adicionar ao Cesto
          </button>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-700 hover:text-brand-red">
            <Info size={18} />
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-gold/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="px-1">
        <h3 className="text-xl font-serif font-semibold mb-1 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 line-clamp-2 mb-2 font-light leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-stone-900">
            {product.price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
          </span>
          <div className="flex gap-1">
            {product.ingredients?.slice(0, 2).map((ing, i) => (
              <span key={i} className="text-[10px] text-stone-400 uppercase tracking-tighter">
                {ing}{i === 0 && product.ingredients!.length > 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
