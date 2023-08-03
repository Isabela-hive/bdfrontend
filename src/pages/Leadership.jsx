import React, { useState, useEffect } from 'react';
import './styles/lead.css';
import { NavLink } from 'react-router-dom';
const carouselData = [
  {
    id: 1,
    title: 'Hon James Najabi Osogo',
    image: 'static/wrestling.jpg',
    description: 'Hon. Osogo was the first MP of Budalangi Constituency',
    readMoreLink: ' https://example.com/readmore1',
  },
  {
    id: 2,
    title: 'The Late Peter Okondo',
    image: 'static/luhyalady.jpg',
    description: 'Hon. Okondo ws the second MP of Budalangi Constituency',
    readMoreLink: 'https://example.com/readmore2',
  },
  {
    id: 3,
    title: 'Hon Raphael Wanjala',
    image: 'static/africastudents.jpg',
    description: 'Hon. Wanjala was the third MP of Budalangi Constituency',
    readMoreLink: 'https://example.com/readmore3',
  },
  {
    id: 4,
    title: 'Ababu Namwamba',
    image: 'static/nicepic.jpg',
    description: 'Hon. Namwamba was the fourth MP of Budalangi Constituency',
    readMoreLink: 'https://example.com/readmore4',
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    setIntervalId(id);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevClick = () => {
    clearInterval(intervalId);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    clearInterval(intervalId);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-item current">
          {/* Main Image */}
          <h2>{carouselData[currentImageIndex].title}</h2>
          <img
            src={carouselData[currentImageIndex].image}
            alt={carouselData[currentImageIndex].title}
          />
          <a
            href={carouselData[currentImageIndex].readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fas fa-arrow-right"
              style={{ color: 'black', fontSize: '26px' }}
            ></i>{' '}
            <p>
              {carouselData[currentImageIndex].description} <i>Read More</i>
            </p>
          </a>
        </div>
        <div className="carousel-column">
          {/* Carousel Images */}
          {carouselData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${
                index === currentImageIndex ? 'current' : ''
              }`}
            >
              <img src={item.image} alt={item.title} />
            </div>
          ))}
          <div className="carousel-controls">
            <button className="prev-button" onClick={handlePrevClick}>
              <i className="fas fa-arrow-left"></i> -
            </button>
            <button className="next-button" onClick={handleNextClick}>
              + <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <div className="Leadership">
      <div className="title">
        <h3>Leadership</h3>
        <nav>
          <NavLink exact to="/leadership">
            Politics
          </NavLink>
          <NavLink exact to="/leadership/adminstration">
            Administration
          </NavLink>
        </nav>
        <p className="intr">
          One thing that you will appreciate about the inhaitants is teir
          political wit and vibrancy in matters politics.
        </p>
      </div>

      <Carousel />
    </div>
  );
};

export default Leadership;

// import React, { useState, useEffect } from 'react';
// import './styles/lead.css';
// import { NavLink, useHistory } from 'react-router-dom';

// const carouselData = [
//   // carousel data here...
// ];

// const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 10000);

//     setIntervalId(id);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const handlePrevClick = () => {
//     clearInterval(intervalId);
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNextClick = () => {
//     clearInterval(intervalId);
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleReadMoreClick = (readMoreLink, title) => {
//     const formattedTitle = title.replace(/\s+/g, '-').toLowerCase(); // Format title as URL-friendly
//     const url = `${readMoreLink}/${formattedTitle}`; // Append formatted title to the readMoreLink
//     history.push(url); // Navigate to the specified URL
//   };

//   return (
//     <div className="carousel">
//       {/* Carousel content here... */}
//     </div>
//   );
// };

// const Leadership = () => {
//   return (
//     <div className="Leadership">
//       <div className="title">
//         {/* Title and navigation code here... */}
//       </div>

//       <Carousel />

//       {carouselData.map((item, index) => (
//         <div key={item.id} className="carousel-item">
//           {/* Main Image */}
//           <h2>{item.title}</h2>
//           <img src={item.image} alt={item.title} />
//           <a
//             href={item.readMoreLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => handleReadMoreClick(item.readMoreLink, item.title)}
//           >
//             <i className="fas fa-arrow-right" style={{ color: 'black', fontSize: '26px' }}></i>{' '}
//             <p>
//               {item.description} <i>Read More</i>
//             </p>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Leadership;
