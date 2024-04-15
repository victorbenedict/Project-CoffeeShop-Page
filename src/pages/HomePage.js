import MenuPage from './MenuPage';
import ContactPage from './ContactPage';
import NavButton from '../components/NavButton';

const HomePage = () => {
  const content = document.getElementById('content');
  const createHeading = document.createElement('h1');
  const paragraph = document.createElement('p');
  const buttonContainer = document.createElement('div');

  createHeading.textContent = 'Welcome to SisBrew!';
  paragraph.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dolorem veniam dolorum ex, ipsa explicabo magnam accusamus aspernatur repellendus ut vero ducimus. Magni, illum qui incidunt error libero ex cupiditate!';

  buttonContainer.appendChild(NavButton('Our Menu', MenuPage));
  buttonContainer.appendChild(NavButton('Contact Us', ContactPage));

  content.appendChild(createHeading);
  content.appendChild(paragraph);
  content.appendChild(buttonContainer);
};

export default HomePage;
