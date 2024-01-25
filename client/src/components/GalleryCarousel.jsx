import React from 'react';
import { Carousel } from 'react-materialize';
// import imagesJson from '../img.json';

const GalleryCarousel = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const imagesArr = imagesJson; // assuming 'imagesJson' is an array in 'img.json'
//     const extractedImages = imagesArr.map((image) => Object.values(image)[0]);
//     setImages(extractedImages);
//   }, []);

  return (
    <Carousel
    images={[
        '../images/image1.jpg',
        '../images/image2.jpg',
        '../images/image3.jpg',
        '../images/image4.jpg',
        '../images/image5.jpg',
        '../images/image6.jpg',
        '../images/image7.jpg',
        '../images/image8.jpg',
        '../images/image9.jpg',
        '../images/image10.jpg',
        '../images/image11.jpg'
    ]}
    options={{
      dist: -100,
      duration: 200,
      fullWidth: false,
      indicators: false,
      noWrap: false,
      numVisible: 5,
      onCycleTo: null,
      padding: 0,
      shift: 0
    }}
  />
  );
};

export default GalleryCarousel;