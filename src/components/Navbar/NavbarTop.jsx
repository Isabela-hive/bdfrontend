import { useState } from 'react';
import { MdLocationOn, MdOutlineLanguage } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { RxCaretDown } from 'react-icons/rx';
import './navbartop.css';

const NavbarTop = () => {
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = (e) => {
    setDropDown(!dropDown);
  };

  return (
    <div className="navbar-top">
      <div className="navbarContainer">
        <div className="left">
          <div className="item">
            <MdLocationOn style={{ fontSize: '16px' }} />
            <span>Budalangi</span>
          </div>
          <div className="item">
            <BiCalendar style={{ fontSize: '16px' }} />
            <span>Today {currentDate} </span>
          </div>
        </div>
        <div className="right">
          <div className="item" onClick={handleDropDown}>
            <MdOutlineLanguage style={{ fontSize: '18px' }} />
            <span>English</span>
            <RxCaretDown style={{ fontSize: '18px' }} />
          </div>
          {dropDown && (
            <ul className="dropDownMenu">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Spanish</a>
              </li>
              <li>
                <a>Kinyala</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
