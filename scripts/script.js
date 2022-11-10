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
let box1 = {
  boxNumber: 1,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box2 = {
  boxNumber: 2,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box3 = {
  boxNumber: 3,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box4 = {
  boxNumber: 4,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box5 = {
  boxNumber: 5,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box6 = {
  boxNumber: 6,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box7 = {
  boxNumber: 7,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box8 = {
  boxNumber: 8,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};
let box9 = {
  boxNumber: 9,
  topLine: false,
  bottomLine: false,
  rightLine: false,
  leftLine: false,
};

$(document).ready(function () {
  $("p").hide();
  $(".board").hide();
  $("a").click(function () {
    $("a").hide();
    $("h2").hide();
    $("p").show();
    $(".board").show();
  });
  startGame();
});

function startGame() {
  console.log("game started");
  let gameOver = true;

  playerTurn(p1);
}

function playerTurn(currentPlayer) {
  let color = currentPlayer.color;
  $(".box > .top-line").click(function () {
    $(this)
      .parent()
      .css("border-top", "3px " + color + " solid");
    updateBox(this, currentPlayer);
    checkNextPlayer(currentPlayer);
  });
  $(".box > .bottom-line").click(function () {
    $(this)
      .parent()
      .css("border-bottom", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
  $(".box > .left-line").click(function () {
    $(this)
      .parent()
      .css("border-left", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
  $(".box > .right-line").click(function () {
    $(this)
      .parent()
      .css("border-right", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
}

function updateBox(this, currentPlayer) {
  if ($(this).css("border-top") != "") {
    box1.topLine=true;
  } else if ($(this).css("border-bottom") != "") {
    box1.bottomLine=true;
  } else if ($(this).css("border-left") != "") {
    box1.leftLine=true;
  } else if ($(this).css("border-right") != "") {
    box1.rightLine=true;
  }
}

function checkNextPlayer(currentPlayer) {
  if (currentPlayer.nextPlayer == 1) {
    playerTurn(p1);
  }
  if (currentPlayer.nextPlayer == 2) {
    playerTurn(p2);
  }
  if (currentPlayer.nextPlayer == 3) {
    playerTurn(p3);
  }
}
