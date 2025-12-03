
function setGrid(size) {
	let container = document.querySelector('.wrapper');

	for (let i = 0; i < size; i++) {
		let row = document.createElement('div')
		row.classList.add('row');
		for (let j = 0; j < size; j++) {
			let cell = document.createElement('div')
			cell.classList.add('cell')
			row.appendChild(cell);
			cell.addEventListener('mouseover', randomRGB)
			cell.style.opacity = 1;
		}
		container.appendChild(row);
	}
}



function changeGrid() {

	let size = prompt('Enter size of grid');
	if (size > 0 && size <= 100) {
		let container = document.querySelector('.wrapper');
		container.innerHTML = ' ';
		setGrid(size);

	} else {
		alert('Please enter a number between 1 and 100');
	}
}

function randomRGB(event) {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
	event.target.style.opacity = event.target.style.opacity - 0.1;
}

document.querySelector('button').addEventListener('click', changeGrid);


setGrid(16)