import data from '../assets/content.json';

const ContactPage = () => {
  const { header, description, email, phone, address } = data.contact;
  const content = document.getElementById('content');

  const createHeader = document.createElement('h1');
  createHeader.textContent = header;
  content.appendChild(createHeader);

  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description;
  content.appendChild(descriptionParagraph);

  const contactContainer = document.createElement('div');
  content.appendChild(contactContainer);

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = 'Email: ';
  const emailLink = document.createElement('a');
  emailLink.textContent = email;
  emailLink.href = `mailto${email}`;
  emailParagraph.appendChild(emailLink);
  contactContainer.appendChild(emailParagraph);

  const phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = 'Phone: ';
  const phoneLink = document.createElement('a');
  phoneLink.textContent = phone;
  phoneLink.href = `tel:${phone}`;
  phoneParagraph.appendChild(phoneLink);
  contactContainer.appendChild(phoneParagraph);

  const addressParagraph = document.createElement('p');
  addressParagraph.textContent = `Address: ${address}`;
  contactContainer.appendChild(addressParagraph);
};

export default ContactPage;
