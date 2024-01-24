import React, { useState } from 'react';
import mongoose from 'mongoose';

function Quote() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [inquiry, setInquiry] = useState('');

  mongoose.connect(uri); // Replace `uri` with the correct MongoDB connection URI

  const handleClick = () => {
    // Handle the click event here
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        telephone: telephone,
        inquiry: inquiry
      })
    })
      .then(() => {
        alert('Your inquiry has been sent!');
      })
      .catch((error) => {
        console.error('Error:', error);
        console.log('Button clicked!');
      });
  };

  return (
    <main>
      <div className='container' style={{ marginTop: '100px' }}>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s6">
                <input id="icon_telephone" type="tel" className="validate" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                <label htmlFor="icon_telephone">Telephone</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" value={inquiry} onChange={(e) => setInquiry(e.target.value)}></textarea>
                <label htmlFor="textarea1">Inquiry</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="button" onClick={handleClick}>Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Quote;