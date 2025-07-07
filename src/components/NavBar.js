// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="Logo" />
        </Link>
      </div>

      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        <li className="dropdown">
          <button type="button" className="dropdown__toggle">Who We Help ▾</button>
          <ul className="dropdown__menu">
            <li><Link to="/who-we-help/private-practices">Private Practices</Link></li>
            <li><Link to="/who-we-help/hospitals">Hospitals</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <button type="button" className="dropdown__toggle">Our Services ▾</button>
          <ul className="dropdown__menu">
            <li><Link to="/services/remote-patient-monitoring">Remote Patient Monitoring</Link></li>
            <li><Link to="/services/chronic-care-management">Chronic Care Management</Link></li>
          </ul>
        </li>
      </ul>

      <div className="navbar__cta">
        <Link to="/contact" className="btn btn--demo">Schedule Demo</Link>
      </div>
    </nav>
  );
}

export default NavBar;

