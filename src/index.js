import showHeader from './header.js';
import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import showFooter from './footer.js';
import './style.css'
import milkteaIcon from './bubbletea.png';

function renderMiddleContent(moduleFunction) {
  const divMiddleContent = document.querySelector('#middleContent');
  divMiddleContent.innerHTML = "";
  divMiddleContent.appendChild(moduleFunction);
}

document.addEventListener('DOMContentLoaded', () => {
  const divContent = document.querySelector('.content');

  divContent.appendChild(showHeader());
  // const mtIcon =  new Image();
  // mtIcon.src = milkteaIcon;
  // divContent.appendChild(mtIcon);

  divContent.appendChild(showHome());
  divContent.appendChild(showFooter());

  document.querySelector('#navHome').addEventListener('click', () => {
    renderMiddleContent(showHome());
  });

  document.querySelector('#navMenu').addEventListener('click', () => {
    renderMiddleContent(showMenu());
  });

  document.querySelector('#navContact').addEventListener('click', () => {
    renderMiddleContent(showContact());
  });
  window.renderMiddleContent = renderMiddleContent;
});