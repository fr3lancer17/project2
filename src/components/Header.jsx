import React from 'react';
import { useEffect } from 'react';
import '../App.css';


function Header() {
  const materialsStyleHeader = { backgroundColor: '#0F3B4F'};
  return (
    <nav style={materialsStyleHeader}>
    <div className="nav-wrapper">
      {/* <a href="#" className="brand-logo center">Logo</a> */}
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li className='logo-details'><h6>Steve Brouthtoen</h6></li>
      </ul>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className='logo-details'><h6>Art, Design, Decoration</h6></li>
      </ul>
    </div>
  </nav>
  );
}

export default Header;