import { months, weekdays } from "./data.js";

const auction = document.querySelector('.auction');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

//Working on the auction class

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 4, 20, 15, 30, 10);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 30, 10);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth()
month = months[month];

let day = futureDate.getDay()
day = weekdays[day];

auction.textContent = `auction ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes} GMT.`;

//future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculate all values
    let days = t / oneDay;
    days = Math.floor(days)
    let hours = t % oneDay / oneHour;
    hours = Math.floor(hours)
    let minutes = t % oneHour / oneMinute;
    minutes = Math.floor(minutes)
    let seconds = Math.floor((t % oneMinute / 1000));

    //set values array
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach((value,index) => {
        value.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, the auction is over.</h4>`
    }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()