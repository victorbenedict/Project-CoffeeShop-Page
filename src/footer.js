export default function showFooter() {
  console.log('showFooter module');
  let divFooter= document.createElement('div')
  divFooter.innerHTML = `
    <div>BOTTOM container
      <div>Credits</div>
      <div>Source Code</div>
    </div>
  `;
  return divFooter;
}