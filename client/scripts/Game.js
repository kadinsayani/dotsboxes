const socket = io();
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.board();
  }

  board = () => {
    let state = {
      boardSize: 3,
      redScore: 0,
      blueScore: 0,
      greenScore: 0,
      turn: "red",
      winner: null,
      lines: {},
      boxColors: {},
      box1: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box2: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box3: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box4: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box5: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box6: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box7: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box8: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
      box9: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        filled: false,
      },
    };
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < state.boardSize; j++) {
        for (let k = 0; k < state.boardSize; k++) {
          state.lines[i + "," + j + "," + k] = 0;
        }
      }
    }
    for (let i = 0; i < state.boardSize; i++) {
      for (let j = 0; j < state.boardSize; j++) {
        state.boxColors[i + "," + j] = "#EEEEEE";
      }
    }
    return state;
  };

  playerMove = () => {
    let coord = event.target.dataset.coord;
    event.target.style.backgroundColor = this.state.turn;
    this.updateLines(coord);
    this.updateBoxes(coord);
    this.updateBoxColors(coord);
    this.checkWinner();
    this.updateTurnState(this.nextPlayer());
  };

  updateLines = (coord) => {
    let lines = this.state.lines;
    if (this.state.turn == "red") {
      lines[coord] = 1;
    } else if (this.state.turn == "blue") {
      lines[coord] = 2;
    } else if (this.state.turn == "green") {
      lines[coord] = 3;
    }
    this.setState({ lines: lines });
    console.log(lines);
  };

  nextPlayer = () => {
    if (this.state.turn === "red") {
      return "blue";
    } else if (this.state.turn === "blue") {
      return "green";
    } else if (this.state.turn == "green") {
      return "red";
    }
  };

  updateTurnState = (turn) => {
    this.setState({
      turn: turn,
    });
  };

  updateBoxes = (coord) => {
    // if line part of box, update box side to true
    console.log(coord);
    let box1 = this.state.box1;
    let box2 = this.state.box2;
    let box3 = this.state.box3;
    let box4 = this.state.box4;
    let box5 = this.state.box5;
    let box6 = this.state.box6;
    let box7 = this.state.box7;
    let box8 = this.state.box8;
    let box9 = this.state.box9;
    if (coord == "0,0,0") {
      box1.top = true;
    }
    if (coord == "0,1,0") {
      box1.bottom = true;
      box4.top = true;
    }
    if (coord == "1,0,0") {
      box1.left = true;
    }
    if (coord == "1,1,0") {
      box1.right = true;
      box2.left = true;
    }
    if (coord == "0,0,1") {
      box2.top = true;
    }
    if (coord == "0,1,1") {
      box2.bottom = true;
      box5.top = true;
    }
    if (coord == "1,0,1") {
      box4.left = true;
    }
    if (coord == "1,1,1") {
      box4.right = true;
      box5.left = true;
    }
    if (coord == "0,0,2") {
      box3.top = true;
    }
    if (coord == "0,1,2") {
      box3.bottom = true;
      box6.top = true;
    }
    if (coord == "1,0,2") {
      box7.left = true;
    }
    if (coord == "1,1,2") {
      box7.right = true;
      box8.left = true;
    }
    if (coord == "0,3,2") {
      box9.bottom = true;
    }
    if (coord == "0,3,1") {
      box8.bottom = true;
    }
    if (coord == "0,3,0") {
      box7.bottom = true;
    }
    if (coord == "0,2,0") {
      box4.bottom = true;
      box7.top = true;
    }
    if (coord == "0,2,1") {
      box5.bottom = true;
      box8.top = true;
    }
    if (coord == "0,2,2") {
      box6.bottom = true;
      box9.top = true;
    }
    if (coord == "1,2,0") {
      box2.right = true;
      box3.left = true;
    }
    if (coord == "1,2,1") {
      box5.right = true;
      box6.left = true;
    }
    if (coord == "1,2,2") {
      box8.right = true;
      box9.left = true;
    }
    if (coord == "1,3,0") {
      box3.right = true;
    }
    if (coord == "1,3,1") {
      box6.right = true;
    }
    if (coord == "1,3,2") {
      box9.right = true;
    }
  };

  updateBoxColors = (coord) => {
    let boxColors = this.state.boxColors;
    let box1 = this.state.box1;
    let box2 = this.state.box2;
    let box3 = this.state.box3;
    let box4 = this.state.box4;
    let box5 = this.state.box5;
    let box6 = this.state.box6;
    let box7 = this.state.box7;
    let box8 = this.state.box8;
    let box9 = this.state.box9;
    if (!box1.filled && box1.top && box1.right && box1.bottom && box1.left) {
      boxColors["0,0"] = this.state.turn;
      box1.filled = true;
      this.updateScore();
    }
    if (!box2.filled && box2.top && box2.right && box2.bottom && box2.left) {
      boxColors["0,1"] = this.state.turn;
      box2.filled = true;
      this.updateScore();
    }
    if (!box3.filled && box3.top && box3.right && box3.bottom && box3.left) {
      boxColors["0,2"] = this.state.turn;
      box3.filled = true;
      this.updateScore();
    }
    if (!box4.filled && box4.top && box4.right && box4.bottom && box4.left) {
      boxColors["1,0"] = this.state.turn;
      box4.filled = true;
      this.updateScore();
    }
    if (!box5.filled && box5.top && box5.right && box5.bottom && box5.left) {
      boxColors["1,1"] = this.state.turn;
      box5.filled = true;
      this.updateScore();
    }
    if (!box6.filled && box6.top && box6.right && box6.bottom && box6.left) {
      boxColors["1,2"] = this.state.turn;
      box6.filled = true;
      this.updateScore();
    }
    if (!box7.filled && box7.top && box7.right && box7.bottom && box7.left) {
      boxColors["2,0"] = this.state.turn;
      box7.filled = true;
      this.updateScore();
    }
    if (!box8.filled && box8.top && box8.right && box8.bottom && box8.left) {
      boxColors["2,1"] = this.state.turn;
      box8.filled = true;
      this.updateScore();
    }
    if (!box9.filled && box9.top && box9.right && box9.bottom && box9.left) {
      boxColors["2,2"] = this.state.turn;
      box9.filled = true;
      this.updateScore();
    }
    this.setState({ boxColors: boxColors });
  };

  updateScore = () => {
    if (this.state.turn === "red") {
      this.setState({
        redScore: this.state.redScore + 1,
      });
    } else if (this.state.turn === "blue") {
      this.setState({
        blueScore: this.state.blueScore + 1,
      });
    } else if (this.state.turn === "green") {
      this.setState({
        greenScore: this.state.greenScore + 1,
      });
    }
  };

  checkWinner = () => {
    let redScore = this.state.redScore;
    let blueScore = this.state.blueScore;
    let greenScore = this.state.greenScore;
    let winner = this.state.winner;
    let boardSize = this.state.boardSize;
    if (redScore != 0 && blueScore != 0 && greenScore != 0) {
      if (redScore > blueScore && redScore > greenScore) {
        winner = "Red";
        this.setState({ winner: winner });
      } else if (blueScore > redScore && blueScore > greenScore) {
        winner = "Blue";
        this.setState({ winner: winner });
      } else if (greenScore > redScore && greenScore > blueScore) {
        winner = "Green";
        this.setState({ winner: winner });
      } else if (redScore === blueScore && redScore > greenScore) {
        winner = "Red and Blue";
        this.setState({ winner: winner });
      } else if (redScore === greenScore && redScore > blueScore) {
        winner = "Red and Green";
        this.setState({ winner: winner });
      } else if (blueScore === greenScore && blueScore > redScore) {
        winner = "Blue and Green";
        this.setState({ winner: winner });
      } else if (redScore === blueScore && redScore === greenScore) {
        winner = "Red, Blue, and Green";
        this.setState({ winner: winner });
      } else {
        winner = "No winner yet!;";
        this.setState({ winner: winner });
      }
    }
  };

  createBoard = (boardSize) => {
    var cols = [];
    for (let i = 0; i <= 2 * boardSize; i++) {
      var row = [];
      for (let j = 0; j <= 2 * boardSize; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            row.push(
              React.createElement(
                "div",
                {
                  className: "dot",
                  id: "dot" + Math.floor(i / 2) + "," + Math.floor(j / 2),
                },
                ""
              )
            );
          } else {
            row.push(
              React.createElement(
                "div",
                {
                  className: "hContainer",
                  "data-coord":
                    "0," + Math.floor(i / 2) + "," + Math.floor(j / 2),
                  onClick: this.playerMove,
                },
                ""
              )
            );
          }
        } else {
          if (j % 2 === 0) {
            row.push(
              React.createElement(
                "div",
                {
                  className: "vContainer",
                  "data-coord":
                    "1," + Math.floor(j / 2) + "," + Math.floor(i / 2),
                  onClick: this.playerMove,
                },
                ""
              )
            );
          } else {
            row.push(
              React.createElement(
                "div",
                {
                  className: "box",
                  id: "box" + Math.floor(i / 2) + "," + Math.floor(j / 2),
                  style: {
                    backgroundColor:
                      this.state.boxColors[
                        Math.floor(i / 2) + "," + Math.floor(j / 2)
                      ],
                  },
                },
                ""
              )
            );
          }
        }
      }
      cols.push(React.createElement("div", { className: "row" }, row));
    }

    return React.createElement("div", { id: "game-board" }, cols);
  };

  render() {
    return (
      <div>
        <div id="game">
          <h1>Dots and Boxes </h1>
          <p>
            {" "}
            Red:{this.state.redScore} Blue:{this.state.blueScore} Green:
            {this.state.greenScore}
          </p>
          <p>Winner:{this.state.winner}</p>
          <div id="board">{this.createBoard(this.state.boardSize)}</div>
        </div>
        <a href="/index.html">Restart</a>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
