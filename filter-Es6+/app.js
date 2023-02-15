let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
   // if statement
   if (filteredProducts.length < 1) {
      productsContainer.innerHTML = `<h6>Sorry, Item not available</h6>`;
      return;
   }

   productsContainer.innerHTML = filteredProducts
      .map((product) => {
         const { id, title, image, price } = product;
         return `<article class="product" data-id ="${id}">
               <img src="${image}" class="product-img img" />
               <footer>
                  <h5 class="product-name">${title}</h5>
                  <span class="product-price">$${price}</span>
               </footer>
            </article>`;
      })
      .join("");
};

displayProducts();

// Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
   const inputValue = searchInput.value;
   filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
   });
   displayProducts();
});

// filter buttons

const brandsDOM = document.querySelector(".brands");

const displayButtons = () => {
   const buttons = [
      "all",
      ...new Set(products.map((product) => product.company)),
   ];
   brandsDOM.innerHTML = buttons
      .map((brand) => {
         return `<button class="brand-btn" data-id ="${brand}">${brand}</button>`;
      })
      .join(" ");
};

displayButtons();

brandsDOM.addEventListener("click", (e) => {
   const el = e.target;
   if (el.classList.contains("brand-btn")) {
      if (el.dataset.id === "all") {
         filteredProducts = [...products];
      } else {
         filteredProducts = products.filter((product) => {
            return product.company === el.dataset.id;
         });
      }
      searchInput.value = "";
      displayProducts();
   }
   console.log(el);
});
