import React, { useState, useEffect } from 'react';
import c from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [homeMedia, setHomeMedia] = useState({
    media: 'st/island.mp4',
    isImage: false,
  });
  useEffect(() => {
    c.get('mainmedia').then(async (rr) => {
      if (rr.ok) {
        let r = await rr.json();
        let { media, image } = r.filter((i) => i.page === 'home')[0];
        setHomeMedia({ media, isImage: image === 1 });
      }
    });
  }, []);
  return (
    <div className="home">
      <>
        {homeMedia.isImage ? (
          <img
            className="background"
            src={`${c.bu}${homeMedia.media}`}
            alt=""
          />
        ) : (
          <video
            className="background"
            src={`${c.bu}${homeMedia.media}`}
            muted
            loop
            autoPlay
          />
        )}
      </>
      <div className="content">
        <div className="large-letter">B</div>
        <div className="main-letters">*Budalangi*</div>
        <div className="top-title">All About Budalangi</div>
        <div className="bottom-title">
          <div className="text">Discover</div>
          <div className="icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
