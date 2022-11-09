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
  const p1 = { score: 0, playerNumber: 1, color: "#00F5FF" };
  const p2 = { score: 0, playerNumber: 2, color: "#EA047E" };
  const p3 = { score: 0, playerNumber: 3, color: "#FCE700" };
  console.log("game started");
  let gameOver = true;

  playerTurn(p1);
}

function playerTurn(currentPlayer) {
  var color = currentPlayer.color;
  $(".board > #box").each(function () {
    $(this).css("border", "3px grey solid");
    $("#box > #top-line").click(function () {
      // change this.parent border
      $(this)
        .parent()
        .css("border-top", "3px " + color + " solid");
      // $(this).css("border-top", "3px " + color + " solid");
    });
    $("#box > #bottom-line").click(function () {
      $(this)
        .parent()
        .css("border-bottom", "3px " + color + " solid");
    });
    $("#box > #left-line").click(function () {
      $(this)
        .parent()
        .css("border-left", "3px " + color + " solid");
    });
    $("#box > #right-line").click(function () {
      $(this)
        .parent()
        .css("border-right", "3px " + color + " solid");
    });
  });
}
