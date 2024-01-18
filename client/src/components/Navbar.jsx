import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <>  
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
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
      </div>
    </nav>

      <ul className="sidenav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </>
  );
}

export default Navbar;