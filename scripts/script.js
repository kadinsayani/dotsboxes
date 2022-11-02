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
  const p1 = { score: 0, playerNumber: 1 };
  const p2 = { score: 0, playerNumber: 2 };
  const p3 = { score: 0, playerNumber: 3 };
  console.log("game started");

  let currentPlayer = p1;
  if (currentPlayer.playerNumber == 1) {
    //TODO
    currentPlayer = p2;
  } else if (currentPlayer.playerNumber == 2) {
    //TODO
    currentPlayer = p3;
  } else {
    //TODO
    currentPlayer = p1;
  }
}
