import { Product } from './types';

export const PRODUCTS: Product[] = [
  // CATEGORIA: ESSÊNCIA
  {
    id: 'e1',
    name: 'Essência (Mix de Frutas)',
    description: 'Escolhemos fruta no ponto e deixámo-la falar por si. Desidratada pacientemente, em pequenos lotes.',
    price: 10.00,
    category: 'Essência',
    image: '/images/essencia-product.jpeg',
    ingredients: ['Maçã Fuji', 'Laranja', 'Manga', 'Abacaxi', 'Banana', 'Kiwi']
  },
  
  // CATEGORIA: TRANSMUTAÇÃO
  {
    id: 't1',
    name: 'Transmutação',
    description: 'Juntámos 3 mundos, e a transformação começou. Novas personalidades emergiram.',
    price: 20.00,
    category: 'Transmutação',
    image: '/images/transmutacao-product.jpeg',
    ingredients: ['Fruta desidratada artesanal', 'Chocolate negro 70%', 'Massa de amêndoa']
  },

  // CATEGORIA: OURO
  {
    id: 'o1',
    name: 'Ouro',
    description: 'Por fora, firme e escuro. Por dentro, macio e inesperado. Bombons artesanais de chocolate negro com recheio de fruta desidratada & massa de amêndoa.',
    price: 30.00,
    category: 'Ouro',
    image: '/images/ouro-product.jpeg',
    ingredients: ['Alinhamento Celeste', 'Essência Primeva', 'Eco Secreto', 'Sopro Tardio', 'Coração Alquímico']
  }
];
