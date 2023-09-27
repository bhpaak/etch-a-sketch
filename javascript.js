let sketchpad = document.querySelector('.sketchpad');

// const containerWidth = 600;
const sketchpadHeight = 600; 

let sizeButton = document.querySelector("#set-size");
let size; 
let squares;

let colorPicker = document.querySelector("#colorpicker");
let color = colorPicker.value;
colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
})

sizeButton.addEventListener("click", (e) => {
    if (document.querySelectorAll(".divRow")) {
        let divRows = document.querySelectorAll(".divRow");
        divRows.forEach( (divRow) => {
            divRow.remove();
        })
    }
    size = prompt('What size square do you want?');
    for (i = 1; i <= size; i++) {
        let divRow = document.createElement('div');
        divRow.classList.add('divRow');
        divRow.setAttribute('style', `height: ${sketchpadHeight/size}px;`)
        for (j = 1; j <= size; j++) {
            let divColumn = document.createElement('div');
            divColumn.classList.add('divColumn');
            divRow.appendChild(divColumn);
        }
        sketchpad.appendChild(divRow);
    }

    squares = document.querySelectorAll(".divColumn");
    squares.forEach( (square) => {
        square.addEventListener('pointerover', changeColor);
    })
    squares.forEach ( (square) => {
        square.addEventListener('mousedown', (e) => {
            let divSquare = e.target;
            divSquare.setAttribute('style', `background-color: ${color};`);
        })
    })
})

function changeColor(e) {
    let divSquare = e.target;
    if (e.buttons === 1) {
        divSquare.setAttribute('style', `background-color: ${color};`);
    }
}

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
    let divSquares = document.querySelectorAll("div.divColumn");
    divSquares.forEach( (divSquare) => {
        divSquare.setAttribute('style', 'background-color: white;')
    })
}