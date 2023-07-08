export default function showHeader() {
  
  console.log('showHeader module');
  let divHeader = document.createElement('div');
  divHeader.innerHTML = `
    <div>Header container
      <div>title: SisBrew Coffee & Tea</div>
      <div>center icon placeholder</div>
      <div>
        <div id='navHome'>Home</div>
        <div id='navMenu'>Menu</div>
        <div id='navContact'>Contact</div>
      </div>
    </div>
  `;
  return divHeader;
}