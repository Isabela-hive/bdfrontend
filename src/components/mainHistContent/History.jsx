import React, { useState, useEffect } from 'react';

import gsap from 'gsap';
import c from '../../constants';
import './history.css';
function History() {
  const [articles, setArticles] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [selc, updateCarousel] = useCarousel(carousel);

  useEffect(() => {
    let cr = [
      {
        title: 'Budalangi Floods and Its consequences ',
        media: `${c.bu}st/victoria.jpg`,
        details: 'By Job Obiri',
        isImage: true,
      },
      {
        title: 'Heros and Heroines ',
        media: `${c.bu}st/island.mp4`,
        details: 'By Rev. Fr. Mandela',
        isImage: false,
      },
      {
        title: 'Ecological Origin of Polictical System and Leadership ',
        media: 'static/nicepic.jpg',
        details: 'Story by Davis Okello',
        isImage: true,
      },
    ];
    let ar = [
      { name: 'Boat Racing', image: '' },
      { name: 'Wrestling', image: '' },
      { name: 'Sumba Island', image: '' },
    ];
    setArticles(ar);
    setCarousel(cr);
  }, []);

  function useCarousel(carousel) {
    const [selc, setSelc] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSelc((prevSelc) =>
          prevSelc === carousel.length - 1 ? 0 : prevSelc + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }, [carousel]);

    function updateCarousel(index, selector) {
      const currentSelector =
        selector || document.querySelector('.selectors .act');
      currentSelector.classList.remove('act');

      if (selector) {
        selector.classList.add('act');
      }

      gsap.fromTo('.media', 0.4, { opacity: 1 }, { opacity: 0 }).then(() => {
        gsap.fromTo(
          '.label',
          0.4,
          { x: 0, opacity: 1 },
          { x: 100, opacity: 0 }
        );
        setSelc(index);
        gsap.fromTo('.media', 0.4, { opacity: 0 }, { opacity: 1 }).then(() => {
          gsap.fromTo(
            '.label',
            0.4,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1 }
          );
        });
      });
    }

    return [selc, updateCarousel];
  }

  return (
    <div className="history">
      <div className="content">
        <div className="carousel">
          {carousel[selc] && (
            <div className="items">
              <div className="item">
                {carousel[selc].isImage ? (
                  <img className="media" src={carousel[selc].media} alt="" />
                ) : (
                  <>
                    <video className="media" src={carousel[selc].media} loop />
                    <button
                      onClick={(e) => e.currentTarget.previousSibling.play()}
                    >
                      Play
                    </button>
                  </>
                )}
                <div className="label">
                  <div className="title">{carousel[selc].title}</div>
                  <div className="description">{carousel[selc].details}</div>
                </div>
              </div>
            </div>
          )}
          <div className="selectors">
            {carousel.map((c, i) => (
              <div
                key={i}
                onClick={(e) => updateCarousel(i, e.target)}
                className={`sel ${i === selc ? 'act' : ''}`}
              >
                {c.isImage && <img src={c.media} alt="" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
