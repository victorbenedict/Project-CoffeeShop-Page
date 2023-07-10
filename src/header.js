import milkteaIcon from './bubbletea.png';
export default function showHeader() {
  
  console.log('showHeader module');
  let divHeader = document.createElement('div');
  divHeader.innerHTML = `
    <div class='header'>Header container
      <div class='title'>SISBREW Coffee & Tea</div>
      <div class='logo'>center logo placeholder</div>
      <div class='navigation'>
        <div id='navHome'>Home</div>
        <div id='navMenu'>Menu</div>
        <div id='navContact'>Contact</div>
      </div>
    </div>
  `;
  const mtIcon =  new Image();
  mtIcon.src = milkteaIcon;
  divHeader.appendChild(mtIcon);
  return divHeader;
}