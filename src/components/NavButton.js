const handleTabNavigation = (page) => {
  const content = document.getElementById('content');
  content.innerHTML = '';
  page();
};

const NavButton = (label, page) => {
  const button = document.createElement('button');
  button.textContent = label;
  button.addEventListener('click', () => handleTabNavigation(page));

  return button;
};

export default NavButton;
