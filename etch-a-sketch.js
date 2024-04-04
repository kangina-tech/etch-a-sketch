// select elements on page (canvas)
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake')

// set up canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'square';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// write a draw function

// write handler for keys

// clear or shake function

// listen for arrowkeys