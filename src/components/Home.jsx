import React from 'react';
import Carousel from './Carousel';




function Home() {
  const materialsStyleFontColor = { color: '#0F3B4F'};

  return (
    <main>
    <div>
      <Carousel/>
    </div>
    <div className ="container">
       <h4 style = {materialsStyleFontColor}>My Commitment to Excellence</h4>
       <p>🎨 <strong>Quality Craftsmanship:</strong>Immerse your home in color with our meticulous painting services. We bring precision and passion to every stroke, ensuring a flawless finish.</p>

       <p>🌈 <strong>Diverse Palette: </strong>Explore a diverse palette of colors and finishes to express your unique style. Whether you crave modern elegance or timeless classics, we've got the perfect shade for you.</p>

       <p>✨ <strong>Expertise in Detail: </strong>From intricate detailing to seamless finishes, our team of experienced painters pays attention to every detail, turning your vision into reality.</p>
    </div>
    </main>
  );
}

export default Home;