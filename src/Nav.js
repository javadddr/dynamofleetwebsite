import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Importing CSS for styling
import logo from "./logo5.png"; // Importing logo

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false); // This function will close the menu
  };


  const trackAction = async (actionName) => {
    try {
      const response = await fetch('https://api.dynamofleet.com/dywebsite/trackAction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ actionName }),
      });
      if (response.ok) {
       
      } else {
      
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <img src={logo} alt="DynamoFleet logo" style={{width:"20%"}} className='logoforhamber' />
      </div>
        <Link to="/" className="nav-link" onClick={() => { closeMenu(); trackAction('Home'); }}>Home</Link>
        <Link to="/pricing" className="nav-link" onClick={() => { closeMenu(); trackAction('Pricing'); }}>Pricing</Link>
        <Link to="/contact" className="nav-link" onClick={() => { closeMenu(); trackAction('Contact'); }}>Contact</Link>
      </div>
      <div className="nav-buttonsdd">
      <a href="http://app.dynamofleet.com/login" className="nav-buttonoooo" onClick={() => { closeMenu(); trackAction('Log in'); }}>Log in</a>
        <a href="http://app.dynamofleet.com/register" className="nav-buttonsss" onClick={() => { closeMenu(); trackAction('Create a Free Account'); }}>Create a Free Account</a>
      </div>
    </nav>
  );
}

export default Nav;
