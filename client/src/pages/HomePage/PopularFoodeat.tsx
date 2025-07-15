

import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

// Fungsi untuk mengacak array
function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function PopularFoodEat() {
  // Product Provider
  const { food } = useProduct();

  const randomFood = food ? shuffleArray(food).slice(0, 4) : [];

  return (
    <PopularCategoryList
      title="Popular Food / Eat"
      coffees={randomFood}
    />
  );
}
