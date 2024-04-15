import data from '../assets/menu.json';

const MenuPage = () => {
  const content = document.getElementById('content');

  const createHeading = document.createElement('h1');
  createHeading.textContent = 'Our Menu';
  content.appendChild(createHeading);

  data.map((item) => {
    const {
      category,
      productName,
      price6oz,
      price8oz,
      price12oz,
      price16oz,
      price22oz,
      priceMisc,
    } = item;
    console.log(
      category,
      productName,
      price6oz,
      price8oz,
      price12oz,
      price16oz,
      price22oz,
      priceMisc
    );
    const product = document.createElement('p');
    product.textContent = `${category}, ${productName},${price6oz},${price8oz},${price12oz},${price16oz},${price22oz},${priceMisc},`;
    content.appendChild(product);
  });
};

export default MenuPage;
