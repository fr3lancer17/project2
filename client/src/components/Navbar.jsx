import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';


function Navbar() {

  useEffect(() => {
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  const materialsStyleNavbar = { backgroundColor: '#748F93'};

  return (
    
    <>
    <nav style={materialsStyleNavbar}>
    <div className="nav-wrapper">
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="left hide-on-med-and-down">
        <li className="nav-item">
          <Link
            to="/"
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
        <li> <Link to="/" >Home</Link> </li>
        <li> <Link to="about" > About </Link> </li>
        <li> <Link to="services" > Services </Link> </li>
        <li> <Link to="gallery" > Gallery </Link> </li>
        <li> <Link to="quote" > Quote </Link> </li>
        <li> <Link to="contact" > Contact </Link> </li>
      </ul>
      </>
  );
}

export default Navbar;