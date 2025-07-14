import { useProduct } from '@/hooks/useProduct';
import PopularCategoryList from './PopularCategoryList';

export default function PopularFoodList() {
  const { foodItems } = useProduct();
  return (
    <PopularCategoryList
      title="Popular Food / Eat"
      coffees={foodItems?.slice(0, 4)}
    />
  );
} 