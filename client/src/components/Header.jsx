import React from 'react';
import { useEffect } from 'react';
import '../App.css';


function Header() {
  
  return (
    <nav>
    <div className="nav-wrapper">
      {/* <a href="#" className="brand-logo center">Logo</a> */}
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li className='logo-details'>Name</li>
      </ul>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className='logo-details'>Company</li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;