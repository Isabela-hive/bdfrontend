import React, { useEffect } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import c from '../../constants';

function Navbar({ menuOpen, triggerClose, closeMenu, navMedia }) {
  useEffect(() => {
    let mcc = document.querySelectorAll('.navbar .media-container > *');
    mcc.forEach((m) => (m.style.opacity = 0));
    if (menuOpen) {
      gsap.fromTo('.navbar', 1, { opacity: 0 }, { opacity: 1 }).then(() => {
        gsap.to('.top-black', 1, { bottom: '70vh' });
        gsap.to('.bottom-black', 1, { top: '70vh' });
        gsap.to('.left-black', 1, { right: '0vw', transform: 'rotate(45deg)' });
        gsap.to('.right-black', 1, {
          left: '50vw',
          transform: 'rotate(45deg)',
        });
        gsap.to('#navco', 0.3, { opacity: 1 }).then(async () => {
          let menuItems = document.querySelectorAll('#navco .menu-item');

          for (let m of menuItems) {
            // m.style.pointerEvents = "all";
            m.addEventListener('click', () => {
              // m.style.pointerEvents = "none";
              m.removeEventListener('mouseleave', hidePreview);
              hideNav();
            });
            m.addEventListener('mouseenter', showPreview);
            m.addEventListener('mouseleave', hidePreview);
            await gsap.fromTo(
              m,
              0.3,
              { opacity: 0, x: -150 },
              { opacity: 1, x: 0 }
            );
          }
        });
      });
    }
  }, [menuOpen]);
  useEffect(() => {
    if (triggerClose) hideNav();
  }, [triggerClose]);

  function hideNav() {
    hideItems().then(() => {
      gsap.to('#navco', 1, { opacity: 0 });
      gsap.to('.top-black', 2, { bottom: '100vh' });
      gsap.to('.bottom-black', 2, { top: '100vh' });
      gsap.to('.left-black', 2, { right: '100vw', transform: 'rotateZ(0)' });
      gsap
        .to('.right-black', 2, { left: '100vw', transform: 'rotateZ(0)' })
        .then(() => {
          gsap
            .fromTo('.navbar', { opacity: 1 }, { opacity: 0 })
            .then(() => closeMenu());
        });
    });
  }
  async function hideItems() {
    let menuItems = document.querySelectorAll('#navco .menu-item');
    for (let m of menuItems) {
      await gsap.fromTo(m, 0.3, { opacity: 1, x: 0 }, { opacity: 0, x: 150 });
    }
  }

  async function showPreview(e) {
    let pn = e.target.getAttribute('media');
    let mcc = document.querySelectorAll('.navbar .media-container > *');
    mcc.forEach((m) => {
      let chk = m.getAttribute('id') === `navpeek${pn}`;
      if (chk) {
        if (m.getAttribute('mediaType') === 'video') m.play();
        m.style.opacity = 1;
      } else m.style.opacity = 0;
    });
    gsap.to('.top-black', 1, { bottom: '90vh' });
    gsap.to('.bottom-black', 1, { top: '90vh' });
    gsap.to('.left-black', 1, { right: '55vw', transform: 'rotateZ(10deg)' });
    await gsap.to('.right-black', 1, {
      left: '65vw',
      transform: 'rotateZ(10deg)',
    });
  }

  async function hidePreview(e) {
    let pn = e.target.getAttribute('media');
    let mcc = document.querySelectorAll('.navbar .media-container > *');
    mcc.forEach((m) => {
      let chk = m.getAttribute('id') === `navpeek${pn}`;
      if (chk) {
        if (m.getAttribute('mediaType') === 'video') m.pause();
      }
    });
    gsap.to('.top-black', 1.5, { bottom: '70vh' });
    gsap.to('.bottom-black', 1.5, { top: '70vh' });
    gsap.to('.left-black', 1.5, { right: '0vw', transform: 'rotate(45deg)' });
    await gsap.to('.right-black', 1.5, {
      left: '50vw',
      transform: 'rotate(45deg)',
    });
  }
  return (
    <div className="navbar">
      <div className="media-container">
        {navMedia.map(({ image, media, page }) =>
          image === 1 ? (
            <img
              style={{ opacity: 0 }}
              id={`navpeek${page}`}
              src={`${c.bu}${media}`}
              alt=""
              srcset=""
              mediaType="image"
            />
          ) : (
            <video
              style={{ opacity: 0 }}
              id={`navpeek${page}`}
              src={`${c.bu}${media}`}
              mediaType="video"
              muted
              loop
            ></video>
          )
        )}
      </div>
      <div className="top-black"></div>
      <div className="bottom-black"></div>
      <div className="right-black"></div>
      <div className="left-black"></div>
      <div className="content" id="navco">
        <NavLink key="nav1" media="home" className="menu-item" to="/">
          <div className="number">01</div>
          <div className="label">Home Page</div>
        </NavLink>

        <NavLink key="nav2" media="history" className="menu-item" to="/history">
          <div className="number">02</div>
          <div className="label">History</div>
        </NavLink>
        <NavLink
          key="nav3"
          media="education"
          className="menu-item"
          to="/education"
        >
          <div className="number">03</div>
          <div className="label">Education</div>
        </NavLink>
        <NavLink
          key="nav4"
          media="about budalangi"
          className="menu-item"
          to="/about"
        >
          <div className="number">04</div>
          <div className="label">About</div>
        </NavLink>
        <NavLink
          key="nav5"
          media="leadership"
          className="menu-item"
          to="/leadership"
        >
          <div className="number">05</div>
          <div className="label">Leadership</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
