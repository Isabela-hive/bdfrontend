import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar-bottom.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
const NavbarBottom = () => {
  const [dropdown, setDropDown] = useState(false);
  const [dropdownTwo, setDropDownTwo] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  const handleDropDownTwo = () => {
    setDropDownTwo(!dropdownTwo);
  };

  return (
    <div className="navbarBottom">
      <div className="navbarBottomWrapper">
        <Link to="/history" className="item">
          <span>Home</span>
          <MdKeyboardArrowDown style={{ fontSize: '20px' }} />
          {dropdown && (
            <div className="dropDown1">
              <span className="active">
                <a>Headlines</a>
              </span>
              <span>
                <a>Popular Stories</a>
              </span>
              <span>
                <a>Sports</a>
              </span>
            </div>
          )}
        </Link>
        <Link exact to="origin" className="item">
          <span>Origin</span>
        </Link>
        <Link to="clans" className="item">
          <span>Clans</span>
        </Link>
        <Link to="collections" className="item">
          <span>Collections</span>
        </Link>
        <Link to="/culture" className="item" onClick={handleDropDownTwo}>
          <span>Culture</span>
          <MdKeyboardArrowDown style={{ fontSize: '20px' }} />
          {dropdownTwo && (
            <div className="dropDown1">
              <span className="active">
                <a>Headlines</a>
              </span>
              <span>
                <a>Popular Stories</a>
              </span>
              <span>
                <a>Sports</a>
              </span>
            </div>
          )}
        </Link>
        <div className="item">
          <FaSearch style={{ fontSize: '20px' }} />
        </div>
      </div>
    </div>
  );
};
export default NavbarBottom;
