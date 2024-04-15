import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

const initializePage = () => {
  NavBar();
  HomePage();
};

document.body.onload = initializePage;
