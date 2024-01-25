import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-materialize';
import imagesJson from '../img.json';

const GalleryCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesArr = imagesJson; // assuming 'imagesJson' is an array in 'img.json'
    const extractedImages = imagesArr.map((image) => Object.values(image)[0]);
    setImages(extractedImages);
  }, []);

  return (
    <Carousel options={{ fullWidth: true }}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;