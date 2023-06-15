import NavbarBottom from '../components/Navbar/NavbarBottom';
import NavbarTop from '../components/Navbar/NavbarTop';
import './styles/history.css';
import Hiistory from '../components/mainHistContent/History';
import { Link } from 'react-router-dom';
import Blog from '../components/mainHistContent/popularStories/blog';
import SportsBlog from '../components/mainHistContent/sportsCulture/sportsBlog';
const History = () => {
  return (
    <div className="hist-home">
      <div className="home-wrapper">
        <NavbarTop />

        <NavbarBottom />

        <Hiistory />
        <Blog />
        <SportsBlog />
      </div>
    </div>
  );
};

export default History;
