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

$(document).ready(function () {
  $("p").hide();
  $(".board").hide();
  $("a").click(function () {
    $("a").hide();
    $("p").show();
    $(".board").show();
  });
  startGame();
});

function startGame() {
  console.log("game started");
  let gameOver = true;

  $(".board > #box").each(function () {
    $(this).css("border", "3px grey solid");
  });

  playerTurn(p1);
}

function playerTurn(currentPlayer) {
  let color = currentPlayer.color;
  $("#box > #top-line").click(function () {
    $(this)
      .parent()
      .css("border-top", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
  $("#box > #bottom-line").click(function () {
    $(this)
      .parent()
      .css("border-bottom", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
  $("#box > #left-line").click(function () {
    $(this)
      .parent()
      .css("border-left", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
  $("#box > #right-line").click(function () {
    $(this)
      .parent()
      .css("border-right", "3px " + color + " solid");
    checkNextPlayer(currentPlayer);
  });
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
