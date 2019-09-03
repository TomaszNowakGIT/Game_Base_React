import React from "react";
import ReactDOM from 'react-dom';
import "./TicTacToe.css";








class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: 'O',
      player2: 'X',
      turn: 1,
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      gameEnabled: false
    }

  }

  checkGameStatus(selectedPlayer) {
    for (let i = 0; i <= 6; i = i + 3) {
      if (!!this.state.board[i] && !!this.state.board[i + 1] && !!this.state.board[i + 2]) {
        if (this.state.board[i] === this.state.board[i + 1] && this.state.board[i + 1] === this.state.board[i + 2]) {
          this.endGame(selectedPlayer);
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      if (!!this.state.board[i] && !!this.state.board[i + 3] && !!this.state.board[i + 6]) {
        if (this.state.board[i] === this.state.board[i + 3] && this.state.board[i + 3] === this.state.board[i + 6]) {
          this.endGame(selectedPlayer);
        }
      }
    }
    if (!!this.state.board[0] && !!this.state.board[4] && !!this.state.board[8]) {
      if (this.state.board[0] === this.state.board[4] && this.state.board[4] === this.state.board[8]) {
        this.endGame(selectedPlayer);
      }
    }
    if (!!this.state.board[2] && !!this.state.board[4] && !!this.state.board[6]) {
      if (this.state.board[2] === this.state.board[4] && this.state.board[4] === this.state.board[6]) {
        this.endGame(selectedPlayer);
      }
    }
    if (selectedPlayer === undefined && this.state.gameEnabled[true] && this.state.turn > 8) {
      this.tieGame(); return
    }
  }



  onFieldClick(index) {
    if (!this.state.gameEnabled) { return };
    if (this.state.board[index] !== '' && this.state.turn <= 8) {
      alert("To pole jest już zajęte !!!"); return

    }
    if (this.state.turn > 8) {
      this.tieGame(); return
    }
    let selectedPlayerTag = this.state.turn % 2 === 0 ? this.state.player1 : this.state.player2;
    let nextSelectedPlayerTag = this.state.turn % 2 === 1 ? this.state.player1 : this.state.player2;
    let board = this.state.board;
    board[index] = selectedPlayerTag;
    // eslint-disable-next-line no-new-wrappers
    let nextTurnNumber = new Number(this.state.turn) + 1;
    this.setState({
      turn: nextTurnNumber,
      board
    })
    this.checkGameStatus(selectedPlayerTag);
    this.nextturn(nextSelectedPlayerTag)
  }
  nextturn(nextSelectedPlayerTag) {
    let nextTurnTag;
    nextTurnTag = `next player:   ` + nextSelectedPlayerTag;
    ReactDOM.render(nextTurnTag, document.querySelector(".nextturn"));

  }
  resetGameBoard(selectedPlayer) {
    this.setState({
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      turn: 0,
      gameEnabled: false
    })
    let winfield;
    winfield = ``
    ReactDOM.render(winfield, document.querySelector(".winner"));
    let nextTurnTag;
    nextTurnTag = ` `;
    ReactDOM.render(nextTurnTag, document.querySelector(".nextturn"));
    let infoGame;
    infoGame = `Choose X or O to begin!`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));

  }
  endGame(selectedPlayer) {
    let winfield;
    winfield = `the winner is:   ` + selectedPlayer;
    ReactDOM.render(winfield, document.querySelector(".winner"));
    this.setState({
      gameEnabled: true

    })
  }
  tieGame(selectedPlayer) {
    let winfield;
    winfield = `tie!!!`;
    ReactDOM.render(winfield, document.querySelector(".winner"));


    this.setState({
      gameEnabled: true

    })
  }
  setX() {
    if (this.state.gameEnabled === false) {
      this.setState({
        player1: 'O',
        player2: 'X',
        turn: 1,
        gameEnabled: true
      });
    }
    let infoGame;
    infoGame = `you chose X`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));

  }
  setO() {
    if (this.state.gameEnabled === false) {
      this.setState({
        player1: 'X',
        player2: 'O',
        turn: 1,
        gameEnabled: true
      });
    }
    let infoGame;
    infoGame = `you chose O`;
    ReactDOM.render(infoGame, document.querySelector(".game-info"));
  }


  render() {
    return (
      <>
        <div className="tictactoe">
          <div className="score-board">
            <div className="score-board-border">
              <div className="mode">
                <h1 className="mode-title">Mode:</h1>
                <div className="select-mode">
                  <div className="vs-player">vs Player</div>
                  <div className="vs-comp">vs Comp</div></div>
              </div>
              <div className="difficulty">
                <h1 className="score-board-title">Move:</h1>
                <div className="nextturn"></div>
              </div>
              <div className="choose">
                <h1 className="score-board-title">Choose:</h1>
                <p className="choose-player" onClick={this.setX.bind(this)}>X</p>
                <p className="choose-player" onClick={this.setO.bind(this)}>O</p>
              </div>
              <div className="score">
                <h1 className="score-board-title">Score</h1>
                <div className="winner"></div>
              </div>
              <div onClick={this.resetGameBoard.bind(this)} className="btn-reset">RESET GAME</div>
            </div>
          </div>

          <div className="game-container">
            <div className="game-board">
              {this.state.board.map((field, key, ) => {
                return (
                  <div className="game-board--field" id={"field" + key} key={key} onClick={this.onFieldClick.bind(this, key)}>
                    <div className="game-board--field-content">{field}</div>
                  </div>
                );
              })}
            </div>
            <div className="game-info">Choose X or O to begin!</div>
          </div>
        </div>

      </>
    );
  }
}



export default TicTacToe;
