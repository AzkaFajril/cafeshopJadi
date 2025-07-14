import axios from 'axios';
import { DeliveryOrder, Customer, OrderItem, DeliOption } from '@/types';

const API_URL = 'http://localhost:5000/payment';

// Transform backend Payment model to frontend DeliveryOrder type
function transformPaymentToDeliveryOrder(payment: any): DeliveryOrder {
  const customer: Customer = {
    id: payment.userId._id || payment.userId,
    name: payment.userId.name || 'Unknown',
    address: payment.deliveryAddress || '',
    coordinates: { lat: 0, lng: 0 } // Default coordinates
  };

  const items: OrderItem[] = payment.items.map((item: any) => ({
    productId: item._id || '',
    productName: item.name || '',
    quantity: item.quantity || 0,
    price: item.price || 0
  }));

  return {
    id: payment._id,
    customer,
    items,
    deliOption: payment.deliveryOption === 'delivery' ? DeliOption.DELIVER : DeliOption.PICK_UP,
    paymentMethod: payment.paymentMethod || 'cash',
    totalPayment: payment.totalAmount || 0,
    date: new Date(payment.createdAt).toLocaleDateString(),
    image: '/images/coffee/hot-americano.jpeg', // Default image
    status: payment.status || 'pending'
  };
}

export async function getOrderList(): Promise<DeliveryOrder[]> {
  const token = localStorage.getItem('coffee-shop-auth-token');
  const res = await axios.get(`${API_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  // Transform the data to match frontend type
  return res.data.map(transformPaymentToDeliveryOrder);
}

export async function getOrderById(id: string): Promise<DeliveryOrder> {
  const token = localStorage.getItem('coffee-shop-auth-token');
  const res = await axios.get(`${API_URL}/orders/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  // Transform the data to match frontend type
  return transformPaymentToDeliveryOrder(res.data);
}

export async function addOrder(newOrder: any): Promise<DeliveryOrder> {
  const token = localStorage.getItem('coffee-shop-auth-token');
  
  // Transform frontend order data to backend format
  const backendOrder = {
    items: newOrder.items.map((item: OrderItem) => ({
      name: item.productName,
      quantity: item.quantity,
      price: item.price,
      size: 'medium' // Default size
    })),
    totalAmount: newOrder.totalPayment,
    paymentMethod: newOrder.paymentMethod,
    deliveryAddress: newOrder.customer.address,
    deliveryOption: newOrder.deliOption
  };

  const res = await axios.post(`${API_URL}/create-order`, backendOrder, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  // Transform the response to match frontend type
  return transformPaymentToDeliveryOrder(res.data);
}

export async function removeAllOrders(): Promise<void> {
  // Opsional: implementasi jika backend mendukung hapus semua order user
}
