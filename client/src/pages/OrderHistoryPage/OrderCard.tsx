import { DeliveryOrder } from '@/types';
import { priceWithSign } from '@/utils/helper';
import { Link } from 'react-router-dom';

interface OrderCardProps {
  order: DeliveryOrder;
}

export default function OrderCard({ order }: OrderCardProps) {
  const orderItemsText = order?.items?.map((i) => `${i.quantity}x ${i.productName}`)?.join(", ");
  
  // Get order status from the order data
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Pending';
    }
  };

  return (
    <Link
      to={`/orders/${order.id}`}
      className="w-full flex gap-3 bg-white hover:bg-primary-50 p-3 rounded-lg border border-gray-100 transition-colors duration-200"
    >
      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={order.image}
          className="w-full h-full object-cover"
          alt="Order"
        />
      </div>
      <div className="w-full flex flex-col gap-2 justify-between">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <h6 className="text-gray-800 font-semibold line-clamp-1">{`#${order.id}`}</h6>
            <span className="text-gray-400 text-xs font-medium">
              {order.date}
            </span>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold">{priceWithSign(order.totalPayment)}</p>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(order.status || 'pending')}`}>
              {getStatusText(order.status || 'pending')}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm line-clamp-2 flex-1">
            {orderItemsText}
          </p>
          <div className="text-xs text-gray-400 ml-2">
            {order.deliOption === 'delivery' ? '🚚 Delivery' : '🏪 Pickup'}
          </div>
        </div>
      </div>
    </Link>
  );
}
