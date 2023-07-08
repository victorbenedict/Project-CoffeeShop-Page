export default function showMenu() {
  console.log('showMenu module');
  let divMenu = document.createElement('div')
  divMenu.innerHTML = `
    <div id="middleContent">MIDDLE container
      <div>Menu</div>
      <div>Cold Brew</div>
      <div>Milk Tea</div>
    </div>
  `
  return divMenu;
}