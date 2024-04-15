const MenuPage = () => {
  const content = document.getElementById('content');
  const createHeading = document.createElement('h1');

  createHeading.textContent = 'Our Menu';
  content.appendChild(createHeading);
};

export default MenuPage;
