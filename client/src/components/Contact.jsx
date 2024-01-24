import React from 'react';

function Contact() {
  return (
    <main>
    <div className="container" style={{ marginTop: '50px' }}>
      <h4>Contact Me</h4>
      <p>Feel free to reach out to us using the contact information below or through social media.</p>

      <div className="row">
        <div className="col s12 m6">
          {/* Contact Information */}
          <h5>Contact Information</h5>
          <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>

          {/* Social Media Links */}
          <h5>Social Media</h5>
          <p>Instagram: <a href="https://www.instagram.com/example/" target="_blank" rel="noopener noreferrer">@example</a></p>
          <p>Facebook: <a href="https://www.facebook.com/example/" target="_blank" rel="noopener noreferrer">@example</a></p>
        </div>

        <div className="col s12 m6">
          {/* Contact Form (if needed) */}
          {/* Add your contact form here if necessary */}
        </div>
      </div>
    </div>
  </main>
  );
}

export default Contact;