import React from "react";
import ReactDOM from 'react-dom';
import "./TicTacToe.css";








class TicTacToe extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: 'O',
      player2: 'X',
      turn: 0,
      board: [
        '', '', '',
        '', '', '',
        '', '', '',
      ],
      gameEnabled: true
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
    if (this.state.board[index] !== '' && this.state.turn < 8) {
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
      gameEnabled: true
    })
    let winfield;
    winfield = ``
    ReactDOM.render(winfield, document.querySelector(".winner"));
    let nextTurnTag;
    nextTurnTag = ` `;
    ReactDOM.render(nextTurnTag, document.querySelector(".nextturn"));

  }
  endGame(selectedPlayer) {
    let winfield;
    winfield = `the winner is:   ` + selectedPlayer;
    ReactDOM.render(winfield, document.querySelector(".winner"));
    this.setState({
      gameEnabled: false

    })
  }
  tieGame(selectedPlayer) {
    let winfield;
    winfield = `tie!!!`;
    ReactDOM.render(winfield, document.querySelector(".winner"));


    this.setState({
      gameEnabled: false

    })
  }
  setX() {
    this.setState({
      turn: 1
    });
  }
  setO() {
    this.setState({
      turn: 0
    });
  }


  render() {
    return (
      <>
        <div className="tictactoe">
          <div className="score-board">
            <div className="score-board-border">
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
          </div>
        </div>

      </>
    );
  }
}



export default TicTacToe;
