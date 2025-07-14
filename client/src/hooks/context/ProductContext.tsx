import { createContext } from 'react';
import { CoffeeProduct } from '@/types';

interface ProductContextProps {
  coffees: CoffeeProduct[];
  icedCoffees: CoffeeProduct[];
  hotCoffees: CoffeeProduct[];
  foodItems: CoffeeProduct[];
  dessertItems: CoffeeProduct[];
  isHot: CoffeeProduct[];
  desserts: CoffeeProduct[];
  coldDrinks: CoffeeProduct[];
  hotDrinks: CoffeeProduct[];
}

const ProductContext = createContext<ProductContextProps | null>(null);

export default ProductContext;
