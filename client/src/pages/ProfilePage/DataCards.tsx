import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import DataCard from './DataCard';
import { getOrderList } from '@/service/order';
import { useEffect, useState } from 'react';

export default function DataCards() {
  const [userOrderCount, setUserOrderCount] = useState(0);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const orders = await getOrderList();
        setUserOrderCount(orders.length);
      } catch {
        setUserOrderCount(0);
      }
    };
    fetchOrderCount();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
      <DataCard label="Order Count" value={userOrderCount} Icon={ShoppingBagIcon} />
      <DataCard label="Favorite Items" value={1024} Icon={HeartIcon} />
    </div>
  );
}
