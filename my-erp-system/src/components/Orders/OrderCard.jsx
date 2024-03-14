// OrderCard.jsx
import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order, onViewDetails, onUpdateStatus, onDelete }) => {
  const { id, customerName, orderDate, status } = order;

  return (
    <div className="order-card">
      <div className="order-details">
        <h2 className="order-id">Order ID: {id}</h2>
        <p className="customer-name">Customer: {customerName}</p>
        <p className="order-date">Order Date: {orderDate}</p>
        <p className="order-status">Status: {status}</p>
      </div>
      <div className="order-actions">
        <button className="details-button" onClick={() => onViewDetails(order)}>View Details</button>
        <button className="update-status-button" onClick={() => onUpdateStatus(order)}>Update Status</button>
        <button className="delete-button" onClick={() => onDelete(order.id)}>Delete</button>
      </div>
    </div>
  );
};

export default OrderCard;
