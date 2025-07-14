import { useEffect, useState } from 'react';
import { DeliveryOrder } from '@/types';
import { fakeTimer } from '@/utils/helper';
import { getOrderById } from '@/service/order';

export default function useOrder(id: string | undefined) {
  const [data, setData] = useState<DeliveryOrder | null>(null);
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      await fakeTimer(1000);
      try {
        if (id) {
          const res = await getOrderById(id);
          setData(res);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
        setData(null);
      }
      setLoding(false);
    };

    if (id) {
      getData();
    }
  }, [id]);

  return { data, isLoading };
}
