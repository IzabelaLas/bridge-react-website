import React, { useState } from 'react';

const PhotoGallery = () => {
  const [mainImage, setMainImage] = useState(0); // keep track of which image is the main image

  const images = [
    "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

  const handleClick = (index) => {
    setMainImage(index);
  }

  return (
    <div className="container">
      <div className="main-image">
        <img src={images[mainImage]} alt="Main" />
      </div>
      <div className="small-images-container">
        {images.slice(1).map((image, index) => (
          <div key={index} className={`small-image ${mainImage === index + 1 ? 'active' : ''}`} onClick={() => handleClick(index + 1)}>
            <img src={image} alt={`Thumbnail ${index+1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;