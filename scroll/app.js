// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels


//setting the date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//toggle bar settings
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links");

    //Dynamically if more links are added (we also need to add (height: auto !important;) to the links container for the bigger screen)
    const containerHeight  = linksContainer.getBoundingClientRect().height;
    const linksHeight  = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

//fixed nav-bar
const navBar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navBarHeight) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});


// smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        //navigating to a specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const ele = document.getElementById(id);
        //calculate the heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav")
        let position = ele.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight
        }
        //this is for small screen size
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});