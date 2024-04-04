// select elements on page (canvas)
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake')

// set up canvas for drawing
const MOVE_AMOUNT = 10;
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.lineTo(x, y);
// ctx.stroke();

// write a draw function
function draw({ key }) {
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    if (key == 'ArrowUp') {
        y -= MOVE_AMOUNT;
    } else if (key == 'ArrowDown') {
        y += MOVE_AMOUNT;
    } else if (key == 'ArrowRight') {
        x += MOVE_AMOUNT;
    } else {
        x -= MOVE_AMOUNT;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({key: e.key});
        console.log(e.key);
        console.log("HANDLING KEY");
    }
}

window.addEventListener('keydown', handleKey);

// write handler for keys

// clear or shake function

// listen for arrowkeys