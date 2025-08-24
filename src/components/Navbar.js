import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ selectedCountry, onCountryChange }) => {
  const countries = [
    { code: '', name: 'All Countries' },
    { code: 'us', name: 'United States' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'pk', name: 'Pakistan' }, 
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'in', name: 'India' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'jp', name: 'Japan' },
    { code: 'br', name: 'Brazil' },
    { code: 'mx', name: 'Mexico' },
    { code: 'cn', name: 'China' },
    { code: 'ru', name: 'Russia' },
    { code: 'ae', name: 'UAE' },
    { code: 'sg', name: 'Singapore' },
  ];

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">DailyPulse</Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crypto">Crypto</Link>
              </li>
            </ul>
            
            {/* Country Selection Dropdown */}
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle country-selector" 
                  to="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  {countries.find(c => c.code === selectedCountry)?.name || 'All Countries'}
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  {countries.map((country) => (
                    <li key={country.code || 'all'}>
                      <button
                        className={`dropdown-item ${selectedCountry === country.code ? 'active' : ''}`}
                        onClick={() => onCountryChange(country.code)}
                      >
                        {country.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;