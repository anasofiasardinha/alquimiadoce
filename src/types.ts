export type Category = 'Ouro' | 'Transmutação' | 'Essência' | 'Todos';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  ingredients?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
