import ProductCardBgImage from '@/components/shared/card/ProductCardBgImage';
import CategoryTitle from './CategoryTitle';
import { useProduct } from '@/hooks/useProduct';



function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function PopularRandomList() {
  // Ambil semua kategori dari context
  const { hotDrinks, coldDrinks, desserts, food } = useProduct();

  // Gabungkan semua produk
  const allProducts = [
    ...(hotDrinks || []),
    ...(coldDrinks || []),
    ...(desserts || []),
    ...(food || []),
  ];

  const randomProducts = shuffleArray(allProducts).slice(0, 8);  // Product Provider

  return (
    <div className="mt-6">
      <CategoryTitle>Popular Drink</CategoryTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {randomProducts?.slice(0, 4)?.map((coffee) => (
          <ProductCardBgImage key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
