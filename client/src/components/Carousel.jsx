import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = 'Kq9lD5nRfW9vTdAAuECk3VlQdyYgFakgxkCsskE-PBU';
        const apiUrl = 'https://api.unsplash.com/search/photos';
        const response = await axios.get(apiUrl, {
          params: {
            page: 1,
            per_page: 10,
            query: 'wall paint design',
          },
          headers: {
            'Authorization': `Client-ID ${apiKey}`,
          },
        });

        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching data from Unsplash:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Enable center mode
    centerPadding: '30%',
  };

  return (
    <div className="carousel-container">
      
      <Slider {...settings}>
    
        {images.map(image => (
          <div key={image.id} className="carousel-item">
           
              <img src={image.urls.small} alt={image.alt_description} />
           
          </div>
        ))}
      
      </Slider>
    </div>
  );
};

export default Carousel;