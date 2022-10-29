// draw grid on canvas
let width = 100;
let height = 100;
let padding = 10;

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function drawBoard() {
  for (let x = 0; x <= width; x += 10) {
    context.moveTo(0.5 + x + padding, padding);
    context.lineTo(0.5 + x + padding, height + padding);
  }

  for (let x = 0; x <= height; x += 10) {
    context.moveTo(padding, 0.5 + x + padding);
    context.lineTo(width + padding, 0.5 + x + padding);
  }

  context.strokeStyle = "black";
  context.stroke();
}

function startGame() {
  drawBoard();
  console.log("Game started");
}

startGame();
