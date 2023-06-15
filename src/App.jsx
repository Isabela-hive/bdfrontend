import './scss/App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Navbar from './components/Navbar/Navbar';
import c from './constants';

import Home from './pages/Home';
import GamePage from './components/mainHistContent/sportsCulture/gamePage';
import About from './pages/About';
import NotFound from './components/not-found';
import History from './pages/History';
import Leadership from './pages/Leadership';

function App() {
  const [state, setState] = useState({
    navMedia: [],
    menuOpen: false,
    triggerClose: false,
  });

  useEffect(() => {
    c.get('mainmedia').then(async (rr) => {
      if (rr.ok) {
        let r = await rr.json();
        setState((prevState) => ({
          ...prevState,
          navMedia: r,
        }));
      }
    });
  }, []);

  const { navMedia, menuOpen, triggerClose } = state;

  const toggleMenu = () => {
    if (!menuOpen) {
      setState((prevState) => ({
        ...prevState,
        triggerClose: false,
        menuOpen: true,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        triggerClose: true,
      }));
    }
  };

  const closeMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: false,
    }));
  };

  return (
    <BrowserRouter>
      <div className="main">
        <NavLink className="head" exact to="/">
          Budalangi Adage
        </NavLink>
        <div className="search-toggle">
          <div className="search-icon"></div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`burger ${menuOpen ? 'close' : ''}`}></span>
        </div>
        <div className="updown">
          <div className="up">
            <FontAwesomeIcon size="2x" icon={faChevronUp} />
          </div>
          <div className="down">
            <FontAwesomeIcon size="2x" icon={faChevronDown} />
          </div>
        </div>
        <div className="navi" style={{ display: menuOpen ? 'flex' : 'none' }}>
          <Navbar
            navMedia={navMedia}
            menuOpen={menuOpen}
            triggerClose={triggerClose}
            closeMenu={closeMenu}
          />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/leadership" element={<Leadership />} />
          {/* <Route exact path="/education" element={<Education />} /> */}
          <Route path="/history/sports/:id" element={<GamePage />} />

          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
