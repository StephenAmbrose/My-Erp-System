// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products Management
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            Orders Management
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">
            Orders Calendar View
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
