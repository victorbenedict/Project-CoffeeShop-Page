
export default function showHome() {
  console.log('showHome module');
  let divHome = document.createElement('div')
  divHome.innerHTML = `
    <div id="middleContent">MIDDLE container
      <div>Welcome to SisBrew Coffee & Tea</div>
      <div>Step into our cozy café and let the aroma of brewed coffee and tea embrace you. Our friendly sisters is here to serve you exceptional coffee and tea, crafted with care and passion. Take a moment to unwind, savor the flavors, and create cherished memories in our welcoming space.</div>
      <div>
        <button id='btnMenu'>Our Menu</button>
        <button id='btnContact'>Contact Us</button>
      </div>
    </div>
  `
  return divHome;
}