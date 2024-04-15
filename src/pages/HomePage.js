import MenuPage from './MenuPage';
import ContactPage from './ContactPage';
import NavButton from '../components/NavButton';
import data from '../assets/content.json';

const HomePage = () => {
  const { header, description } = data.home;
  const content = document.getElementById('content');

  const createHeading = document.createElement('h1');
  createHeading.textContent = header;
  content.appendChild(createHeading);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  content.appendChild(paragraph);

  const buttonContainer = document.createElement('div');
  buttonContainer.appendChild(NavButton('Our Menu', MenuPage));
  buttonContainer.appendChild(NavButton('Contact Us', ContactPage));
  content.appendChild(buttonContainer);
};

export default HomePage;
