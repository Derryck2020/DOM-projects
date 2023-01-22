//these represent the colors that we are going to have with different types.
const colors = ['blue', 'green', 'rgba(122,75,189)', 'hsl(90, 100%, 50%)', '#f15025', '#14c7e6', 'orange']

const color = document.querySelector('.color');
const btn = document.getElementById('btn');
const headingColor = document.querySelector('.heading');

btn.addEventListener('click', () => {
    //get random number between 0 - 3;
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    headingColor.style.color = colors[randomNumber];
})

//this function will generate random numbers from 0 - 3 which correspond to the colors array
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};
