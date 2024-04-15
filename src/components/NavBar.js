import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import NavButton from './NavButton';

const NavBar = () => {
  const container = document.getElementById('navbar');
  container.appendChild(NavButton('Home', HomePage));
  container.appendChild(NavButton('Menu', MenuPage));
  container.appendChild(NavButton('Contact Us', ContactPage));
};

export default NavBar;
