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
      description:
        'Getting rich is just a strtaegy. Well one thing i know is that I will engage in business. I agree  i messed up but well they say in every mistake or downfall experience becomes part of  you',
    },
    {
      image: 'static/luhyalady.jpg',
      description: 'Description 2',
      //   isLarge: true,
    },
    {
      image: 'static/luhyachildren.jpg',
      description:
        'A beautiful island for budaangi people. Hye isabellah, do you wnna come out and dnce with me tonight ',
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
