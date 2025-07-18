import { useEffect, useState } from 'react';
import { DeliveryOrder } from '@/types';
import { fakeTimer } from '@/utils/helper';
import { getOrderList } from '@/service/order';

export default function useOrders() {
  const [data, setData] = useState<DeliveryOrder[]>([]);
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      const res = await fetch('http://localhost:5000/api/orders');
      const orders = await res.json();
      setData(orders);
      setLoding(false);
    };
    getData();
  }, []);

  return { data, isLoading };
}
