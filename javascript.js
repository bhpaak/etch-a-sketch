let container = document.querySelector('.container');

// const containerWidth = 600;
const containerHeight = 600; 

for (i = 1; i <= 16; i++) {
    let divRow = document.createElement('div');
    divRow.classList.add('divRow');
    divRow.setAttribute('style', `height: ${containerHeight/16}px;`)
    for (j = 1; j <= 16; j++) {
        let divColumn = document.createElement('div');
        divColumn.classList.add('divColumn');
        divRow.appendChild(divColumn);
    }
    container.appendChild(divRow);
}

let squares = document.querySelectorAll(".divColumn");
squares.forEach( (square) => {
    square.addEventListener('pointerover', changeColor);
})

function changeColor(e) {
    let divSquare = e.target;
    divSquare.setAttribute('style', 'background-color: black;');
}

let button = document.querySelector('#reset');
button.addEventListener('click', reset);

function reset() {
    let divSquares = document.querySelectorAll("div.divColumn");
    divSquares.forEach( (divSquare) => {
        divSquare.setAttribute('style', 'background-color: lightgray;')
    })
}