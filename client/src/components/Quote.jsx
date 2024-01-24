import React from 'react';

function Quote() {
  const handleClick = () => {
    // Handle the click event here
    console.log('Button clicked!');
  };

  return (

    <main>
    <div className='container' style={{ marginTop: '100px' }}>
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate"/>
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate"/>
            <label for="email">Email</label>
          </div>
          <div className="input-field col s6">
            {/* <i className="material-icons prefix">phone</i> */}
            <input id="icon_telephone" type="tel" className="validate"/>
            <label for="icon_telephone">Telephone</label>
          </div>
        </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label for="textarea1">Inquiry</label>
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