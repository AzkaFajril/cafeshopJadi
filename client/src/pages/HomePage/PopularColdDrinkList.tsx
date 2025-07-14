import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularColdDrinkList() {
  // Product Provider
  const { coldDrinks } = useProduct();

  return (
    <PopularCategoryList
      title="Popular Cold Drink"
      coffees={coldDrinks?.slice(0, 4)}
    />
  );
}
