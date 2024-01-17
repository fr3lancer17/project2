import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
      
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          end
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="about"
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="services"
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="gallery"
          end
        >
          Gallery
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="quote"
        >
          Quote
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;