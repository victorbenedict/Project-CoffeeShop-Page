import showHeader from './header.js';
import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import showFooter from './footer.js';

function renderMiddleContent(moduleFunction) {
  const divMiddleContent = document.querySelector('#middleContent');
  divMiddleContent.innerHTML = "";
  divMiddleContent.appendChild(moduleFunction);
}

document.addEventListener('DOMContentLoaded', () => {
  const divContent = document.querySelector('.content');
  divContent.appendChild(showHeader());
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