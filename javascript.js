let sketchpad = document.querySelector('.sketchpad');

// const containerWidth = 600;
const sketchpadHeight = 600; 

let sizeButton = document.querySelector("#set-size");
let size; 
let squares;



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
        square.addEventListener('mousedown', clickColor);
    })
})

function changeColor(e) {
    let divSquare = e.target;
    if (e.buttons === 1) {
        divSquare.setAttribute('style', `background-color: ${color};`);
    }
}

function clickColor(e) {
    let divSquare = e.target;
    divSquare.setAttribute('style', `background-color: ${color};`);
}

let colorPicker = document.querySelector("#colorpicker");
let color = colorPicker.value;
colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
    squares = document.querySelectorAll(".divColumn");
    squares.forEach( (square) => {
        square.removeEventListener('pointerover', changeRainbow);
        square.removeEventListener('mousedown', clickRainbow);
        square.addEventListener('pointerover', changeColor);
        square.addEventListener('mousedown', clickColor);
    })
})



let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {
    let divSquares = document.querySelectorAll("div.divColumn");
    divSquares.forEach( (divSquare) => {
        divSquare.setAttribute('style', 'background-color: white;')
    })
}

let rainbowButton = document.querySelector("#rainbow-mode");
rainbowButton.addEventListener("click", (e) => {
    squares = document.querySelectorAll(".divColumn");
    squares.forEach( (square) => {
        square.removeEventListener('pointerover', changeColor);
        square.removeEventListener('mousedown', clickColor);
        square.addEventListener('pointerover', changeRainbow);
        square.addEventListener('mousedown', clickRainbow);
    })
})

function makeRainbow() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; 
}

function changeRainbow(e) {
    let divSquare = e.target;
    if (e.buttons === 1) {
        divSquare.setAttribute('style', `background-color: ${makeRainbow()};`);
    }
}

function clickRainbow(e) {
    let divSquare = e.target;
    divSquare.setAttribute('style', `background-color: ${makeRainbow()};`);
}