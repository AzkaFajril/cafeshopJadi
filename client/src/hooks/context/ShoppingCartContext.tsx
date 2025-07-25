import { createContext } from 'react';
import { CartItem, CoffeeProduct, DeliOption, PaymentMethod } from '@/types';

export interface ShoppingCartContextProps {
  // Cart Item
  items: CartItem[];
  addToCart: (product: CoffeeProduct, quantity: number) => void;
  updateQuantity: (index: number, newQuantity: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  // Delivery Option
  deliOption: DeliOption;
  updateDeliOption: (value: DeliOption) => void;
  // Payment Method
  paymentMethod: PaymentMethod;
  updatePaymentMethod: (value: PaymentMethod) => void;
  // Other
  itemCount: number;
  subTotal: number;
  deliFee: number;
  totalPayment: number;
}

const ShoppingCartContext = createContext<ShoppingCartContextProps | null>(
  null
);

export default ShoppingCartContext;
