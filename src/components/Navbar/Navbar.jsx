// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBoxOpen, faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import './Navbar.css'; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faChartBar} /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <FontAwesomeIcon icon={faBoxOpen} /> Products Management
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            <FontAwesomeIcon icon={faClipboardList} /> Orders Management
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/calendar" className="nav-link">
            <FontAwesomeIcon icon={faCalendarAlt} /> Orders Calendar View
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
