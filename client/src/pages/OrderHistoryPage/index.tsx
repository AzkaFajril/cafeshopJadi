import { useState } from 'react';
import Title1 from '@/components/shared/typo/Title1';
import OrderList from './OrderList';

export default function OrderHistoryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-6">
        <Title1>Order History</Title1>
        <p className="text-gray-600 mt-2">Track your past orders and their status</p>
      </div>
      
      <div className="mb-4">
        <div className="inline-flex justify-between gap-2 w-full sm:w-80 bg-gray-100 text-gray-900 text-sm rounded-xl border border-gray-300 p-3">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search orders by ID or items..."
          />
          {!!searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-gray-600 hover:text-gray-900">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <OrderList searchTerm={searchTerm} />
      </div>
    </div>
  );
}
