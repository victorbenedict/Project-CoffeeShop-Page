import showHeader from './header.js';
import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import showFooter from './footer.js';

const divContent = document.querySelector('.content');
const divMiddleContent = document.querySelector('#middleContent');


(function(global){
  function renderHome(){
    document.querySelector('#navHome').addEventListener('click', () => {
    divMiddleContent.innerHTML = "";
    divMiddleContent.appendChild(showHome());
    });
  }
  
  function renderMenu(){
  
  }
  
  function renderContact(){
    
  }
})(window);



// divContent.appendChild(showHeader());
// divContent.appendChild(showHome());
// divContent.appendChild(showFooter());




document.querySelector('#navMenu').addEventListener('click', () => {
  divMiddleContent.innerHTML = "";
  divMiddleContent.appendChild(showMenu());
});

document.querySelector('#navContact').addEventListener('click', () => {
  divMiddleContent.innerHTML = "";
  divMiddleContent.appendChild(showContact());
});

const btnMenu = document.querySelector('#btnMenu');
const btnContact = document.querySelector('#btnContact');

