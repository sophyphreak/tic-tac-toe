import React from 'react';
import Board from './Board';

class Game extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      game: [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
      ],
      player: null,
      comp: null,
      gameState: "play"
    };
    this.setGame = this.setGame.bind(this);
  };

  setGame(val, row, col) {
    if (this.state.gameState === "play") {
      let game = this.state.game.slice();
      if (game[row][col] === " ") {
        game[row][col] = val;
        this.setState({ game });
        this.checkGameEnd(() => {});
        if (this.state.gameState === "play" && val === this.state.player) {
          this.compPlay();
        };
      };
    };
  };

  compPlay() {
    if (this.state.gameState === "play") {
      let row = Math.floor(Math.random() * 3);
      let col = Math.floor(Math.random() * 3);
      if (this.state.game[row][col] !== " ") {
        this.compPlay();
      } else {
        this.setGame(this.state.comp, row, col);
      };
    };
  };

  checkGameEnd(_callback) {
    this.checkIfWinner(() => {});
    _callback();
  };

  checkIfWinner(_callback) {
    let game = this.state.game.slice();
    // check row
    game.forEach((row, index) => {
        let rowCheck = row.reduce((sum, space) => {
          if (space === "X") {
            return sum + 1;
          } else if (space === "O") {
            return sum - 1;
          } else {
            return sum;
          }
        }, 0)
        if (rowCheck === 3) {
          this.setState({ gameState: "X wins!" });
          this.endGame();
        } else if (rowCheck === -3) {
          this.setState({ gameState: "O wins!" });
          this.endGame();
        };
      });
    // check column
  let gameTranspose = game[0].map(function(col, i) {
    return game.map(function(row) {
      return row[i]
    })
  });
  gameTranspose.forEach((row, index) => {
      let rowCheck = row.reduce((sum, space) => {
        if (space === "X") {
          return sum + 1;
        } else if (space === "O") {
          return sum - 1;
        } else {
          return sum;
        }
      }, 0)
      if (rowCheck === 3) {
        this.setState({ gameState: "X wins!" });
        this.endGame();
      } else if (rowCheck === -3) {
        this.setState({ gameState: "O wins!" });
        this.endGame();
      };
      _callback();
    });

    //check 1st diagonal
    if (game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") {
      this.setState({ gameState: "X wins!" });
      this.endGame();
    } else if (game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O") {
      this.setState({ gameState: "O wins!" });
      this.endGame();
    };

    //check 2nd diagonal
    if (game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X") {
      this.setState({ gameState: "X wins!" });
      this.endGame();
    } else if (game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O") {
      this.setState({ gameState: "O wins!" });
      this.endGame();
    };

    //check for draw
    let flattened = game.reduce((a, b) => {return a.concat(b);});
    let takenSpace = flattened.reduce((sum, val) => {
      if (val === "X" || val === "O"){
        return sum + 1;
      } else {
        return sum;
      }
    }, 0);
    if (takenSpace === 9) {
      setTimeout(() => {
        if (takenSpace === 9 && this.state.gameState === "play") {
          this.setState({ gameState: "draw" });
          this.endGame();
        };
      }, 500);
    }
  };

  endGame() {
    setTimeout(() => {
      this.setState({
        gameState: "play",
        game: [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
          ],
      });
    }, 3000)
  }

  returnBegin() {
    return (
      <div>
        <p className="Game__child">Play as X or O?</p>
        <p></p>
        <div className="Game__child">
        <button className="btn btn-default" onClick={() => this.setState({ player: "X", comp: "O"})}>X</button>
        <button className="btn btn-default" onClick={() => this.setState({ player: "O", comp: "X"})}>O</button>
        </div>
      </div>
    )
  }

  returnBoard() {
    return <Board setGame={this.setGame} game={this.state.game} player={this.state.player}/>;
  }

  render() {
    return (
      <div className="App__child">
        {this.state.player == null ? this.returnBegin() : this.returnBoard()}
        <p></p>
        <p className="Game__child">{this.state.gameState}!</p>
      </div>
    );
  }
};

export default Game;