import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './styles/contributors.css';

function Contributors() {
  const [contributors, setContributors] = useState([
    {
      name: 'Mzungu Fulani',
      title: 'Researcher - University of Columbia',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
            Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: 'static/mama.jpg',
    },
    {
      name: 'Job Obiri',
      title: 'Software Developer - Obisoft',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
        Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: 'static/luhyalady.jpg',
    },
    {
      name: 'Sharon Isabella',
      title: 'Student - Kisii University',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Consequuntur ducimus quam tempora commodi illum soluta pariatur at expedita minima dignissimos? 
        Quidem nostrum harum dolores quis quasi itaque id quos enim.`,
      image: 'static/luhyachildren.jpg',
    },
  ]);
  const [current, setCurrent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (currentIndex + 1) % contributors.length;
      setCurrent(contributors[newIndex]);
      setCurrentIndex(newIndex);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, contributors]);

  function setSl(n) {
    setCurrent(contributors[n]);
    setCurrentIndex(n);
  }

  return (
    <div className="contributors">
      {current ? (
        <div className="contributor">
          <img className="cont-img" alt="curimg" src={current.image} />
          <FontAwesomeIcon icon={faQuoteLeft} className="cont-quote" />
          <div className="cont-content">{current.content}</div>
          <FontAwesomeIcon icon={faQuoteRight} className="cont-quote" />
          <div className="cont-name">{current.name}</div>
          <div className="cont-title">{current.title}</div>

          <div className="cont-sels">
            {contributors.map((c, i) => (
              <div
                key={i}
                className={`cont-sel ${i === currentIndex ? 'cont-s' : ''}`}
                onClick={() => setSl(i)}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="heading">Elders' View</div>
    </div>
  );
}

export default Contributors;
