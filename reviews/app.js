
import { reviews } from "./data.js"; 

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.querySelector('.info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item of reviews object to 0, because is index based
let currentItem = 0;

//load initial item
/*
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    console.log(item)
    img.src = item.pic;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}); 

we refactor it to make more reusable below
*/

window.addEventListener('DOMContentLoaded', function () {
    showIndvidual();
});

//show the individual based on item
function showIndvidual() {
    const item = reviews[currentItem];
    // console.log(item)
    img.src = item.pic;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Acessing next individual
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    };
    showIndvidual();
})


// Acessing previous individual
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    };
    showIndvidual();
});

// random button
randomBtn.addEventListener('click', () => {
currentItem =  Math.floor(Math.random() * reviews.length);
showIndvidual();
});