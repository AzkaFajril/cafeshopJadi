import ProductCardBgImage from '@/components/shared/card/ProductCardBgImage';
import CategoryTitle from './CategoryTitle';
import { useProduct } from '@/hooks/useProduct';

function getRandomItems<T>(arr: T[], n: number): T[] {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

export default function PopularProductList() {
  // Product Provider
  const { coffees } = useProduct();
  const randomItems = getRandomItems(coffees, 4);

  return (
    <div className="mt-6">
      <CategoryTitle>Popular Random Items</CategoryTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {randomItems?.map((coffee) => (
          <ProductCardBgImage key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
