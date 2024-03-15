// OrdersManagement.jsx
import React, { useState } from 'react';
import OrderCard from './OrderCard';
import './OrdersManagement.css'; // Import CSS file

const mockOrders = [
  { id: 1, customerName: 'John Doe', orderDate: '2024-08-02', status: 'Pending' },
  { id: 2, customerName: 'Jane Smith', orderDate: '2024-04-09', status: 'Shipped' },
  { id: 3, customerName: 'Alice Johnson', orderDate: '2024-02-15', status: 'Delivered' },
  { id: 4, customerName: 'Bob Brown', orderDate: '2024-03-05', status: 'Processing' },
  { id: 5, customerName: 'Emily Davis', orderDate: '2024-03-21', status: 'Pending' },
  { id: 6, customerName: 'Michael Wilson', orderDate: '2024-03-04', status: 'Shipped' },
  { id: 7, customerName: 'Sarah Martinez', orderDate: '2024-03-08', status: 'Delivered' },
  { id: 8, customerName: 'David Anderson', orderDate: '2024-03-16', status: 'Processing' },
  { id: 9, customerName: 'Emma Thomas', orderDate: '2024-03-30', status: 'Pending' },
  { id: 10, customerName: 'James Garcia', orderDate: '2024-03-12', status: 'Shipped' },
  { id: 11, customerName: 'Olivia Hernandez', orderDate: '2024-03-17', status: 'Delivered' },
  { id: 12, customerName: 'William Lopez', orderDate: '2024-03-31', status: 'Processing' },
  // Additional mock order data
  { id: 13, customerName: 'Sophia Adams', orderDate: '2024-04-01', status: 'Pending' },
  { id: 14, customerName: 'Noah Baker', orderDate: '2024-04-02', status: 'Shipped' },
  { id: 15, customerName: 'Mia Clark', orderDate: '2024-04-03', status: 'Delivered' },
];


const OrdersManagement = () => {
  const [orders, setOrders] = useState(mockOrders);

  const handleViewDetails = (order) => {
    // Handle viewing order details
  };

  const handleUpdateStatus = (order) => {
    // Handle updating order status
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="orders-management-container">
      <h1>Orders Management</h1>
      <div className="orders-container">
        {orders.map(order => (
          <OrderCard
            key={order.id}
            order={order}
            onViewDetails={handleViewDetails}
            onUpdateStatus={handleUpdateStatus}
            onDelete={handleDeleteOrder}
          />
        ))}
      </div>
      <div className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Analytics</button>
        <button className="nav-btn">Orders</button>
        <button className="nav-btn">Settings</button>
      </div>
    </div>
  );
};

export default OrdersManagement;
