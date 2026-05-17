import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-bottom border-stone-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-red" />
                <h2 className="text-2xl font-serif font-bold">O Seu Cesto</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-400">
                  <ShoppingBag size={64} strokeWidth={1} className="mb-4 opacity-20" />
                  <p className="font-serif italic text-lg">O seu cesto está vazio</p>
                  <button 
                    onClick={onClose}
                    className="mt-6 text-brand-red font-medium hover:underline"
                  >
                    Continuar a comprar
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 rounded-lg overflow-hidden bg-brand-paper">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-serif font-bold text-lg leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-stone-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-sm text-stone-500 mb-3">{item.category}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1 border border-stone-200">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="text-stone-400 hover:text-brand-red"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="text-stone-400 hover:text-brand-red"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-medium">
                            {(item.price * item.quantity).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-stone-200">
                <div className="flex justify-between mb-4">
                  <span className="text-stone-500">Subtotal</span>
                  <span className="text-xl font-bold">
                    {total.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
                  </span>
                </div>
                <button className="w-full py-4 bg-brand-red text-white rounded-xl font-bold tracking-widest uppercase hover:bg-brand-red/90 transition-all shadow-lg shadow-brand-red/20 mb-3">
                  Finalizar Encomenda
                </button>
                <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest">
                  Portes calculados no checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
