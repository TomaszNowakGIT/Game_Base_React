import React from "react";
import ReactDOM from "react-dom";
import "./TicTacToe.css";

class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "O",
      player2: "X",
      turn: 1,
      board: ["", "", "", "", "", "", "", "", ""],
      gameEnabled: false,
      info: "",
      gameMode: "multi"
    };
    this.computerTurn = this.computerTurn.bind(this);
  }

  checkGameStatus(selectedPlayer) {
    for (let i = 0; i <= 6; i = i + 3) {
      if (
        !!this.state.board[i] &&
        !!this.state.board[i + 1] &&
        !!this.state.board[i + 2]
      ) {
        if (
          this.state.board[i] === this.state.board[i + 1] &&
          this.state.board[i + 1] === this.state.board[i + 2]
        ) {
          this.endGame(selectedPlayer);
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        !!this.state.board[i] &&
        !!this.state.board[i + 3] &&
        !!this.state.board[i + 6]
      ) {
        if (
          this.state.board[i] === this.state.board[i + 3] &&
          this.state.board[i + 3] === this.state.board[i + 6]
        ) {
          this.endGame(selectedPlayer);
        }
      }
    }
    if (
      !!this.state.board[0] &&
      !!this.state.board[4] &&
      !!this.state.board[8]
    ) {
      if (
        this.state.board[0] === this.state.board[4] &&
        this.state.board[4] === this.state.board[8]
      ) {
        this.endGame(selectedPlayer);
      }
    }
    if (
      !!this.state.board[2] &&
      !!this.state.board[4] &&
      !!this.state.board[6]
    ) {
      if (
        this.state.board[2] === this.state.board[4] &&
        this.state.board[4] === this.state.board[6]
      ) {
        this.endGame(selectedPlayer);
      }
    }
    if (
      selectedPlayer === undefined &&
      this.state.gameEnabled[true] &&
      this.state.turn > 9
    ) {
      this.tieGame();
      return;
    }
  }

  onFieldClick(index) {
    if (!this.state.gameEnabled) {
      return;
    }
    if (this.state.board[index] !== "") {
      this.infoGame();
      return;
    }
    if (this.state.turn > 8) {
      this.tieGame();
      return;
    }
    console.log(this.state.turn)
    let selectedPlayerTag =
      this.state.turn % 2 === 0 ? this.state.player1 : this.state.player2;
    let nextSelectedPlayerTag =
      this.state.turn % 2 === 1 ? this.state.player1 : this.state.player2;
    let board = this.state.board;
    board[index] = selectedPlayerTag;
    // eslint-disable-next-line no-new-wrappers
    let nextTurnNumber = new Number(this.state.turn) + 1;
    this.setState({
      turn: nextTurnNumber,
      board,
      info: ""
    });
    let infoGame;
    infoGame = ` `;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
    this.checkGameStatus(selectedPlayerTag);
    this.nextTurn(nextSelectedPlayerTag);
  }
  infoGame() {
    this.setState({
      info: "This field is already taken!"
    });
    let infoGame;
    infoGame = `This field is already taken!`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
  nextTurn(nextSelectedPlayerTag) {
    let nextTurnTag;
    nextTurnTag = `next player:   ` + nextSelectedPlayerTag;
    ReactDOM.render(nextTurnTag, document.querySelector(".nextturn"));
  }
  resetGameBoard() {
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
      turn: 0,
      gameEnabled: false
    });
    let winfield;
    winfield = ``;
    ReactDOM.render(winfield, document.querySelector(".winner"));
    let nextTurnTag;
    nextTurnTag = ` `;
    ReactDOM.render(nextTurnTag, document.querySelector(".nextturn"));
    let infoGame;
    infoGame = `Set game mode to start game!!`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
  endGame(selectedPlayer) {
    let winfield;
    this.setState({
      gameEnabled: false
    });
       winfield = `the winner is:   ` + selectedPlayer;
    ReactDOM.render(winfield, document.querySelector(".winner"));
    
  }
  tieGame() {
    let winfield;
    winfield = `tie!!!`;
    ReactDOM.render(winfield, document.querySelector(".winner"));
    this.setState({
      gameEnabled: false
    });
    this.infoGame();
  }
  setX() {
    if (this.state.gameEnabled === false) {
      this.setState({
        player1: "O",
        player2: "X",
        turn: 1,
        gameEnabled: true,
        info: "you chose X"
      });
    }
    let infoGame;
    infoGame = `you chose X`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
  setO() {
    if (this.state.gameEnabled === false) {
      this.setState({
        player1: "X",
        player2: "O",
        turn: 1,
        gameEnabled: true,
        info: "you chose O"
      });
    }
    let infoGame;
    infoGame = `you chose O`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
  setMulti() {
    if (this.state.gameEnabled === false) {
      this.setState({
        player1: "X",
        player2: "O",
        turn: 0,
        gameEnabled: false,
        info: "you chose X",
        gameMode: "multi"
      });
    }
    let infoGame;
    infoGame = `Choose X or O to begin!`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
   setSingle() {
    if (this.state.gameEnabled === false) {
      this.setState({
        turn: 0,
        gameEnabled: true,
        info: "you chose X",
        gameMode: "single"
      });
    }
    let infoGame;
    infoGame = `player1(X) vs computer(O) `;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }
 
   getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(8);

    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    while (this.state.board[randomInt] !== '') {
      randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return randomInt;
  }

  computerTurn() {
    let { board } = this.state

    function _getRandomInt() {
      let min = Math.ceil(0);
      let max = Math.floor(8);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computerFieldSelected = _getRandomInt();

    if (board[computerFieldSelected] === '') {
      board[computerFieldSelected] = 'o'
    } else if (this.state.gameEnabled && this.state.board.indexOf('') >= 0) {
      this.computerTurn();
      return;
    } else return;

    this.setState({
      turn: this.state.turn + 0,
      board
    })

    this.checkGameStatus('o');
  }   

  async onFieldClickCom(index) {
    if (!this.state.gameEnabled) { return };
    if (this.state.board[index] !== '') { this.infoGame(); return };
    if (this.state.turn >= 4) {this.tieGame();return;}
    let board = this.state.board;
    board[index] = 'x';

    this.setState({
      turn: this.state.turn + 1,
      board
    }, this.computerTurn)

    this.checkGameStatus('x');
    console.log("gracz"+this.state.turn+"komputer"+this.computerTurn)
  }


  render() {
    let singlePlayer;
    let multiPlayer;
    if(this.state.gameMode === "multi"){
      singlePlayer = ( <div className='game-board'>
              {this.state.board.map((field, key) => {
                return (
                  <div
                    className='game-board--field'
                    id={"field" + key}
                    key={key}
                    onClick={this.onFieldClick.bind(this, key)}>
                    <div className='game-board--field-content'>{field}</div>
                  </div>
                );
              })}
            </div>);
    }
    if(this.state.gameMode === "single"){
      multiPlayer = ( <div className='game-board'>
              {this.state.board.map((field, key) => {
                return (
                  <div
                    className='game-board--field'
                    id={"field" + key}
                    key={key}
                    onClick={this.onFieldClickCom.bind(this, key)}>
                    <div className='game-board--field-content'>{field}</div>
                  </div>
                );
              })}
            </div>);
    }

    return (
      <>
        <div className='tictactoe'>
          <div className='score-board'>
            <div className='score-board-border'>
              <div className='mode'>
                <h1 className='mode-title'>Mode:</h1>
                <div className='select-mode'>
                  <div className='vs-player'
                  onClick={this.setMulti.bind(this)}>vs Player</div>
                  <div
                    className='vs-comp'
                    onClick={this.setSingle.bind(this)}>
                    vs Comp
                  </div>
                </div>
              </div>
              <div className='difficulty'>
                <h1 className='score-board-title'>Move:</h1>
                <div className='nextturn'></div>
              </div>
              <div className='choose'>
                <h1 className='score-board-title'>Choose:</h1>
                <p className='choose-player' onClick={this.setX.bind(this)}>
                  X
                </p>
                <p className='choose-player' onClick={this.setO.bind(this)}>
                  O
                </p>
              </div>
              <div className='score'>
                <h1 className='score-board-title'>Score</h1>
                <div className='winner'></div>
              </div>
              <div
                onClick={this.resetGameBoard.bind(this)}
                className='btn-reset'>
                RESET GAME
              </div>
            </div>
          </div>

          <div className='game-container'>
           {singlePlayer}
           {multiPlayer}
            <div className='game-info'>Choose X or O to begin!</div>
          </div>
        </div>
      </>
    );
  }
}

export default TicTacToe;
