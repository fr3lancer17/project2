import React from 'react';

function Footer() {
  const materialsStyleFooter = { backgroundColor: '#748F93'};
  return (
  <footer className="page-footer" style = {materialsStyleFooter}>
    <div className="footer-copyright">
      <div className="container">
      © 2024 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;