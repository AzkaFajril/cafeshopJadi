import PageLoading from '@/components/shared/PageLoading';
import { classNames } from '@/utils/helper';
import OrderCard from './OrderCard';
import useOrders from './useOrders';
import EmptyOrder from './EmptyOrder';
import { DeliveryOrder } from '@/types';

interface OrderListProps {
  searchTerm?: string;
}

export default function OrderList({ searchTerm = '' }: OrderListProps) {
  const { data, isLoading } = useOrders();
  
  // Filter orders based on search term
  const filteredOrders = data.filter((order: DeliveryOrder) => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    const orderId = order.id.toLowerCase();
    const orderItems = order.items.map(item => item.productName).join(' ').toLowerCase();
    
    return orderId.includes(searchLower) || orderItems.includes(searchLower);
  });
  
  const orderCount = filteredOrders.length;

  return (
    <>
      {!isLoading && (
        <div className="w-full">
          {orderCount > 0 ? (
            <ul>
              {filteredOrders?.map((order, index) => (
                <li
                  key={index}
                  className={classNames(
                    'py-2',
                    index !== orderCount - 1
                      ? 'border-b border-primary-200'
                      : ''
                  )}
                >
                  <OrderCard order={order} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyOrder />
          )}
        </div>
      )}
      <PageLoading show={isLoading} />
    </>
  );
}
