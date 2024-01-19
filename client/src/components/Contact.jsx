import React from 'react';
import  { useState } from 'react';

// create a contact us page 
const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us with any questions or concerns you may have
        about our products and services. We are here to help!</p>
      <form action="#" method="post">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" required /><br />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" required /><br />
        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default ContactUs;

