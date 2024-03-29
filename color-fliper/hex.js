const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');
const headingColor = document.querySelector('.heading');

btn.addEventListener('click', () => {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()]; //we generating a string that contains a # and six values from hex array
		//console.log(hexColor)
	}
	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
	headingColor.style.color = hexColor;
});

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}
