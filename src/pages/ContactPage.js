const ContactPage = () => {
  const content = document.getElementById('content');
  const createHeading = document.createElement('h1');

  createHeading.textContent = 'Contact Us';
  content.appendChild(createHeading);
};

export default ContactPage;
