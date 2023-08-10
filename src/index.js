import './style.css';
import Icon from './icon.png';
import bubbletea_image from './bubbletea.png';
import Data from './data.csv';

const cl = console.log;

cl('hello')
cl(Data)

// Function to set the favicon
function setFavicon() {
  const faviconLink = document.querySelector('link[rel="icon"]');
  const newFavicon = document.createElement('link');
  newFavicon.rel = 'icon';
  newFavicon.type = 'image/png';
  newFavicon.href = Icon;

  if (faviconLink) {
    // Replace the existing favicon
    faviconLink.parentNode.replaceChild(newFavicon, faviconLink);
  } else {
    // Add the new favicon to the head
    document.head.appendChild(newFavicon);
  }
}

function setHeaderImage() {
  const header_div = document.querySelector('.header_div');
  const newImage = document.createElement('img');
  newImage.src = bubbletea_image;
  newImage.alt = 'Bubble Tea Image';
  header_div.appendChild(newImage);
  
}
// Call the function to set the favicon when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setFavicon();
  setHeaderImage();

});
(function() {
  const content = document.querySelector('.content');
  const navHome = document.getElementById('navHome');
  const navMenu = document.getElementById('navMenu');
  const navContact = document.getElementById('navContact');


  function renderHome() {
    content.innerHTML = "";

    const heading = document.createElement('h2');
    const pitch = document.createElement('p');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    
    heading.textContent = 'Welcome to SisBrew Coffee & Tea!'
    pitch.textContent = 'Step into our cozy café and let the aroma of brewed coffee and tea embrace you. Our friendly sisters is here to serve you exceptional coffee and tea, crafted with care and passion. Take a moment to unwind, savor the flavors, and create cherished memories in our welcoming space.'
    menuButton.textContent = 'Our Menu';
    contactButton.textContent = 'Contact Us';

    div1.appendChild(heading);
    div2.appendChild(pitch);
    div3.appendChild(menuButton);
    div3.appendChild(contactButton);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
  }

  function renderMenu(){
    content.innerHTML = "";
    const heading = document.createElement('h2');
    const table = document.createElement('table');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    
    heading.textContent = 'Our Menu';

    Data.forEach(rowData => {
      const rowElement = document.createElement('tr');

      rowData.forEach(cellData => {
        const cellElement = document.createElement('td');
        cellElement.textContent = cellData;
        rowElement.appendChild(cellElement);
      });
      table.appendChild(rowElement);
      });

      div1.appendChild(heading);
      div2.appendChild(table);
      content.appendChild(div1);
      content.appendChild(div2);
  }
  
  function renderContact(){
    content.innerHTML = "";
    const heading = document.createElement('h2');
    const statement = document.createElement('p');
    const emailDiv = document.createElement('div');
    const emailLabel = document.createElement('strong');
    const email = document.createElement('a');
    const phoneDiv = document.createElement('div');
    const phoneLabel = document.createElement('strong');
    const phone = document.createElement('a');
    const addressDiv = document.createElement('div');
    const addressLabel = document.createElement('strong');
    const address = document.createElement('address')
    const map = document.createElement('iframe');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');

    heading.textContent = 'Contact us';
    statement.textContent = "We'd love to hear from you! At Sisbrew, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:"
    emailLabel.textContent = 'Email: ';
    email.href = 'mailto:sisbrewcoffeeandtea@gmail.com';
    email.textContent = 'sisbrewcoffeeandtea@gmail.com';
    phoneLabel.textContent = 'Phone: ';
    phone.href = 'tel:+083 552 5503';
    phone.textContent = '+083 552 5503';
    addressLabel.textContent = 'Address: ';
    address.textContent = 'Bulaong Terminal, General Santos City, Philippines';
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.133250709257!2d125.16011341476842!3d6.112756795573847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79f789cc98701%3A0x20f47e1eaba3a4c3!2sSisBrew%20Coffee%20and%20Tea!5e0!3m2!1sen!2sph!4v1688807253107!5m2!1sen!2sph';
    map.width = 400;
    map.height = 300;
    map.style = 'border:0';
    map.allowFullscreen = '';
    map.loading = 'lazy';
    map.referrerPolicy = 'no-referrer-when-downgrade';

    div1.appendChild(heading);
    div2.appendChild(statement);
    div3.appendChild(emailDiv);
    div3.appendChild(phoneDiv);
    div3.appendChild(addressDiv);
    div4.appendChild(map);
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(email);
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phone);
    addressDiv.appendChild(addressLabel);
    addressDiv.appendChild(address);
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
  }
  
  navHome.addEventListener('click', () => {
    renderHome();
  });
  
  navMenu.addEventListener('click', () => {
    renderMenu()
  });
  
  navContact.addEventListener('click', () => {
    renderContact()
  });
  
  renderHome(); // Call the function immediately
})();





