import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Importing CSS for styling
import logo from "./logo5.png"; // Importing logo

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false); // This function will close the menu
  };

  return (
    <nav className="navbar">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
        <img src={logo} alt="DynamoFleet logo" className="logo" />
        <span className="brand-name">DynamoFleet</span>
      </Link>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger Icon */}
        &#9776;
      </button>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Added onClick to each Link to close the menu upon clicking */}
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/pricing" className="nav-link" onClick={closeMenu}>Pricing</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </div>
      <div className="nav-buttonsdd">
        <a href="http://app.dynamofleet.com/login" className="nav-buttonoooo" onClick={closeMenu}>Log in</a>
        <a href="http://app.dynamofleet.com/register" className="nav-buttonsss" onClick={closeMenu}>Create a Free Account</a>
      </div>
    </nav>
  );
}

export default Nav;
