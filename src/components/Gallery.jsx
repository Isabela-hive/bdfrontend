import React, { useState } from 'react';
import './styles/gallery.css';

const GalleryCard = ({ image, description, isLarge }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`gallery-card ${isHovered ? 'hovered' : ''} ${
        isLarge ? 'large' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="Gallery" className="gallery-image" />
      {isHovered && <div className="gallery-description">{description}</div>}
    </div>
  );
};

const Gallery = () => {
  const galleryData = [
    {
      image: 'static/luhyamum.jpg',
      description: 'Description 1',
    },
    {
      image: 'static/luhyalady.jpg',
      description: 'Description 2',
      //   isLarge: true,
    },
    {
      image: 'static/luhyachildren.jpg',
      description: 'Description 3',
      //   isLarge: true,
    },
    {
      image: 'static/luhyamum.jpg',
      description: 'Description 1',
    },
    {
      image: 'static/luhyamum.jpg',
      description: 'Description 1',
      isLarge: true,
    },
  ];

  return (
    <div className="gallery-container">
      {galleryData.map((data, index) => (
        <GalleryCard
          key={index}
          image={data.image}
          description={data.description}
          isLarge={data.isLarge || false}
        />
      ))}
    </div>
  );
};

export default Gallery;
