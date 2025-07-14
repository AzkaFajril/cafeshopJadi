import { useEffect, useState } from 'react';
import { DeliveryOrder, DeliOption, PaymentMethod } from '@/types';
import { fakeTimer } from '@/utils/helper';
import { getOrderList } from '@/service/order';

// Sample data for testing
const sampleOrders: DeliveryOrder[] = [
  {
    id: 'ORD001',
    customer: {
      id: '1',
      name: 'John Doe',
      address: '123 Main St, City',
      coordinates: { lat: 0, lng: 0 }
    },
    items: [
      { productId: '1', productName: 'Hot Americano', quantity: 2, price: 8.00 },
      { productId: '2', productName: 'Cappuccino', quantity: 1, price: 5.50 }
    ],
    deliOption: DeliOption.DELIVER,
    paymentMethod: PaymentMethod.CASH,
    totalPayment: 13.50,
    date: '2024-01-15',
    image: '/images/coffee/hot-americano.jpeg',
    status: 'completed'
  },
  {
    id: 'ORD002',
    customer: {
      id: '1',
      name: 'John Doe',
      address: '123 Main St, City',
      coordinates: { lat: 0, lng: 0 }
    },
    items: [
      { productId: '3', productName: 'Iced Latte', quantity: 1, price: 6.00 },
      { productId: '4', productName: 'Chocolate Cake', quantity: 1, price: 4.50 }
    ],
    deliOption: DeliOption.PICK_UP,
    paymentMethod: PaymentMethod.KBZ_PAY,
    totalPayment: 10.50,
    date: '2024-01-14',
    image: '/images/coffee/iced-latte.jpeg',
    status: 'processing'
  }
];

export default function useOrders() {
  const [data, setData] = useState<DeliveryOrder[]>([]);
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoding(true);
      await fakeTimer(1000);
      try {
        const res = await getOrderList();
        setData(res);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Use sample data if API fails
        setData(sampleOrders);
      }
      setLoding(false);
    };
    getData();
  }, []);

  return { data, isLoading };
}
