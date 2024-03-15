import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './OrdersCalendarView.css'; // Import your custom CSS file

const localizer = momentLocalizer(moment);

const OrdersCalendarView = () => {
    const [orders, setOrders] = useState([
        { id: 1, customerName: 'John Doe', expectedDeliveryDate: new Date(2024, 2, 20), status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', expectedDeliveryDate: new Date(2024, 2, 21), status: 'Shipped' },
        { id: 3, customerName: 'Alice Johnson', expectedDeliveryDate: new Date(2024, 2, 2), status: 'Pending' },
        { id: 4, customerName: 'Bob Anderson', expectedDeliveryDate: new Date(2024, 2, 26), status: 'Shipped' },
        { id: 5, customerName: 'Emily Brown', expectedDeliveryDate: new Date(2024, 2, 29), status: 'Pending' },
        { id: 6, customerName: 'Michael Wilson', expectedDeliveryDate: new Date(2024, 3, 13), status: 'Shipped' },
        { id: 7, customerName: 'Peter Anderson', expectedDeliveryDate: new Date(2024, 3, 18), status: 'Pending' },
        { id: 8, customerName: 'Mathew Hendrick', expectedDeliveryDate: new Date(2024, 3, 29), status: 'Shipped' },
        { id: 9, customerName: 'Michael Wilson', expectedDeliveryDate: new Date(2024, 3, 1), status: 'Pending' },
        // Add more mock order data as needed
      ]);

  const [selectedDateOrders, setSelectedDateOrders] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const handleDateClick = (event) => {
    const clickedDate = moment(event.start).startOf('day');
    const ordersForDate = orders.filter(order =>
      moment(order.expectedDeliveryDate).startOf('day').isSame(clickedDate)
    );
    setSelectedDateOrders(ordersForDate);
  };
  
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  return (
    <>
    <div id='orderheading'><h2>Orders Calendar View</h2></div>
    <div className="orders-calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <h2>{currentDate.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <Calendar
        localizer={localizer}
        events={orders.map(order => ({
          title: order.customerName,
          start: order.expectedDeliveryDate,
          end: order.expectedDeliveryDate,
        }))}
        onSelectEvent={handleDateClick}
        startAccessor="start"
        endAccessor="end"
        views={['month']}
        date={currentDate.toDate()} // Set the date prop to the current month
        style={{ height: 500 }}
      />
      <div className="order-list">
        <h2>Orders for Selected Date:</h2>
        <ul>
          {selectedDateOrders.map(order => (
            <li key={order.id} className="show">
              <span className="order-info">Customer Name: {order.customerName}</span>
              <span className="order-info">Delivery Date: {moment(order.expectedDeliveryDate).format('YYYY-MM-DD')}</span>
              <span className="order-info">Status: {order.status}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Analytics</button>
        <button className="nav-btn">Orders</button>
        <button className="nav-btn">Settings</button>
      </div>
    </div>
    </>
  );
};

export default OrdersCalendarView;
