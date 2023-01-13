const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "starter",
        price: 15.99,
        img: "./assets/image/cake.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./assets/image/delight.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "deserts",
        price: 6.99,
        img: "./assets/image/monk.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./assets/image/noddles.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./assets/image/onhigh.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "deserts",
        price: 18.99,
        img: "./assets/image/pizza.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./assets/image/slow-down.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./assets/image/vegas.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "deserts",
        price: 16.99,
        img: "./assets/image/yellowside.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Vitalii special",
        category: "lunch",
        price: 4.89,
        img: "./assets/image/vitalii.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "brentford bay",
        category: "breakfast",
        price: 9.99,
        img: "./assets/image/rachel.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

//load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        // console.log(item)

        return `<article class="menu-item">
                <img src=${item.img} class="photo img" alt=${item.title}>
                <div class="item-info">
                    <header>
                        <h5>${item.title}</h5>
                        <h5 class="price">$${item.price}</h5>
                    </header>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    //console.log(displayMenu)
}


function displayMenuButtons(){
    //Below code is adding unique catgories
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)){
            values.push(item.category);
            }
            return values;
        }, ["all"]);
    //we adding html to our categories
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn btn" type="button" 
        data-unique = ${category}>${category}</button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtn = document.querySelectorAll(".filter-btn");
    //filter items
    filterBtn.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.unique;
            const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if(menuItem.category === category) {
                return menuItem;
            }
            });
            // console.log(menuCategory);
            if (category === "all"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
};


