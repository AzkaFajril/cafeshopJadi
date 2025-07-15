

import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularDesserts() {
  // Product Provider
  const { desserts } = useProduct();

  return (
    <PopularCategoryList
      title="Popular Desserts"
      coffees={desserts?.slice(0, 4)}
    />
  );
}
