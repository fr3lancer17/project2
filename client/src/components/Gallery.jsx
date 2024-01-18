import React from 'react';
import { useEffect } from 'react';

function Gallery() {

  useEffect(() => {

    var slider = document.querySelectorAll(".slider");
    M.Slider.init(slider, {});
  }, []);

  return (

    <main>
      <div className='container'>
        <div className="slider">
        <ul className="slides">
          <li>
            <img src="https://cdn.pixabay.com/photo/2018/10/05/14/39/sunset-3726030_640.jpg"/>
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg"/> 
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_640.jpg"/> 
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_640.jpg"/> 
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </main>
  );
}

export default Gallery;