const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

//responsible for fetching data
const fetchProducts = async () => {
   productsDOM.innerHTML = '<div class="loading"></div>';
   try {
      const resp = await fetch(url);
      const data = await resp.json();
      return data;
   } catch (error) {
      productsDOM.innerHTML = '<p class="error">there was an error</p>';
   }
};

//responsible for rendering the products to the DOM
const displayProducts = (list) => {
   const productList = list
      .map((product) => {
         //id, name, price, img
         const { id } = product;
         const { name: title, price } = product.fields;
         const { url: img } = product.fields.image[0];
         const formatPrice = price / 100;
         return `<a href="product.html?id=${id}" class="single-product">
                  <img
                     src="${img}"
                     class="single-product-img img"
                     alt="${title}"
                  />
                  <footer>
                     <h5 class="name">${title}</h5>
                     <span class="price">$${formatPrice}</span>
                  </footer>
               </a>`;
      })
      .join("");
   productsDOM.innerHTML = `<div class="products-container">
      ${productList}
            </div>`;
};

//responsible for invoking the fetchProducts and displayProducts
const start = async () => {
   const data = await fetchProducts();
   displayProducts(data);
};

start();
