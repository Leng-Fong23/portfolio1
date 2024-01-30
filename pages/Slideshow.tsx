// Slideshow.tsx
import React, { useState, useEffect } from 'react';

const Slideshow: React.FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Function to advance to the next image
    const nextSlide = () => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to advance to the next slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <img src={images[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default Slideshow;
