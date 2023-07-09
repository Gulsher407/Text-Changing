import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar({ title, about, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{about}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${mode === 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode enable</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
