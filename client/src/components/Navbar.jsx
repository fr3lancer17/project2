import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';


function Navbar() {
<<<<<<< HEAD
  const styles = {
    div: {
      display: 'flex',
      width: '100vw'
    },
  ul: {
    display: 'flex',
    justifyContent: 'flex-end'
  }, 
  li: {
    listStyle: 'none',
    justifyContent: 'flex-end',
    flex: 0,
    padding: '10px'
  }
  }
  return (
      <div style={styles.div} className='navbar-fixed'>
    <ul style={styles.ul}className="nav nav-tabs">
      <li style={styles.li} className="nav-item">
        <Link
          to="*"
          end
        >
          Home
        </Link>
      </li>
      <li style={styles.li} className="nav-item">
        <Link
          to="about"
        >
          About
        </Link>
      </li>
      <li style={styles.li} className="nav-item">
        <Link
          to="services"
        >
          Services
        </Link>
      </li>
      <li style={styles.li} className="nav-item">
        <Link
          to="gallery"
          end
        >
          Gallery
        </Link>
      </li>
      <li style={styles.li} className="nav-item">
        <Link
          to="quote"
        >
          Quote
        </Link>
      </li>
      <li style={styles.li} className="nav-item">
        <Link
          to="contact"
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
=======

  useEffect(() => {
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

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
      <li> <Link to="/" end >Home</Link> /</li>
      <li> <Link to="about" > About </Link> </li>
      <li> <Link to="services" > Services </Link> </li>
      <li> <Link to="gallery" > Gallery </Link> </li>
      <li> <Link to="quote" > Quote </Link> </li>
      <li> <Link to="contact" > Contact </Link> </li>
      </ul>
    </>
>>>>>>> 12deaa53403abdf7b2172b0a784a614a07d2cdc5
  );
}

export default Navbar;