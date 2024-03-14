// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/LandingPage/Dashboard';
import Products from './components/Products/ProductsManagement';
import OrdersManagement from './components/Orders/OrdersManagement';
import OrdersCalendarView from './components/Calendar/OrdersCalendarView';
// Import other components as needed

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Uncomment and add other routes as needed */}
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
