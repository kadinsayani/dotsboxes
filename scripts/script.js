let p1 = {
  score: 0,
  playerNumber: 1,
  color: "#00F5FF",
  nextPlayer: 2,
  previousPlayer: 3,
};
let p2 = {
  score: 0,
  playerNumber: 2,
  color: "#EA047E",
  nextPlayer: 3,
  previousPlayer: 1,
};
let p3 = {
  score: 0,
  playerNumber: 3,
  color: "#FCE700",
  nextPlayer: 1,
  previousPlayer: 2,
};

function Box(x, y, width, height, number) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.number = number;
}

function Dot(x, y) {
  this.x = x;
  this.y = y;
}

const GRIDSIZE = 3;
const CELLSIZE = 100;
const currentPlayer = p1;
let boxes = [];
let dots = [];

// set up canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
const width = 500;
const height = 500;

// function to draw canvas
function drawCanvas() {
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "#EEEEEE";
  ctx.fillRect(0, 0, width, height);
  document.body.appendChild(canvas);
}

function drawDots() {
  for (let i = 0; i < GRIDSIZE + 1; i++) {
    for (let j = 0; j < GRIDSIZE + 1; j++) {
      // fill array of boxes with new box objects
      boxes.push(new Box(i * CELLSIZE, j * CELLSIZE, CELLSIZE, CELLSIZE), i);
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      // 3x3 grid of dots
      ctx.arc((i + 1) * CELLSIZE, (j + 1) * CELLSIZE, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}

function mouseMoveHandler(e) {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  let mouseY = e.clientY - rect.top;
}

function click(e) {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  let mouseY = e.clientY - rect.top;
  selectSide(mouseX, mouseY);
}

function selectSide(mouseX, mouseY) {}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function getDotCoordinates() {
  for (let i = 0; i < boxes.length; i++) {
    dots.push(new Dot(boxes[i].x + CELLSIZE / 2, boxes[i].y + CELLSIZE / 2));
  }
}

canvas.addEventListener("mousemove", mouseMoveHandler);
canvas.addEventListener("click", click);

function playerTurn(currentPlayer) {
  ctx.fillStyle = currentPlayer.color;
}
function changePlayer(currentPlayer) {
  if (currentPlayer.playerNumber === 1) {
    playerTurn(p2);
  } else if (currentPlayer.playerNumber === 2) {
    playerTurn(p3);
  } else if (currentPlayer.playerNumber === 3) {
    playerTurn(p1);
  }
}

function drawPlayerScoreboard() {
  ctx.fillStyle = "#000000";
  ctx.font = "20px verdana";
  ctx.fillText("Player 1: ", 20, 20);
  ctx.fillText("Player 2: ", 20, 40);
  ctx.fillText("Player 3: ", 20, 60);
}

function startGame() {
  drawCanvas();
  drawDots();
  drawPlayerScoreboard();
  getDotCoordinates();
  playerTurn(p1);
}

startGame();
