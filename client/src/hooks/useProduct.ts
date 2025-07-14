import { useContext } from 'react';
import ProductContext from './context/ProductContext';

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductContext');
  }
  const { coffees, icedCoffees, hotCoffees, foodItems, dessertItems, isHot, desserts,hotDrinks, coldDrinks } = context;
  return { coffees, icedCoffees, hotCoffees, foodItems, dessertItems, isHot, desserts,hotDrinks, coldDrinks };
};
