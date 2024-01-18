import React from 'react';
import {Link} from 'react-router-dom';


function Navbar() {
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
  );
}

export default Navbar;