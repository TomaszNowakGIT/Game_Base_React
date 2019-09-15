import React from 'react';
import './PaddleGame.css';
import './PaddleGame.scss';
import soundEfx from './loop.mp3';
import beepSound from './jump.wav';
import failureSound from './failure.wav'



class PaddleGame extends React.Component {
  constructor() {
    super();

    this.game = {
      gameBoard: null,
      context: null,
      ballX: 100,
      ballY: 100,
      ballSpeedX: 5,
      ballSpeedY: 7,
      paddleWidth: 100,
      paddleHeight: 10,
      paddleDistFromEdge: 60,
      paddleX: 400,
      gameSpeed: 1000,
      gameStatus: null
    }

    this.state = {
      gameRefreshInterval: null,
      bounces: 0,
      isFullScreen: false
    }

    this.updateAll = this.updateAll.bind(this);
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  componentDidMount() {
    this.game.gameBoard = this.refs.canvas;
    this.game.context = this.refs.canvas.getContext('2d');
    this.backgroundSound()
    this.setState({ gameRefreshInterval: setInterval(this.updateAll, 1000 / 30) });
    this.refs.canvas.addEventListener('mousemove', this.updateMousePosition)




  }
  level() {
    if (this.state.bounces > 0) {
      clearInterval(this.state.gameRefreshInterval)
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 1000 / 30) });
      this.setState({ gameSpeed: 1000 })
    }
    if (this.state.bounces > 5) {
      clearInterval(this.state.gameRefreshInterval)
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 800 / 30) });
      this.setState({ gameSpeed: 800 })

    } if (this.state.bounces > 10) {
      clearInterval(this.state.gameRefreshInterval)
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 500 / 30) });
      this.setState({ gameSpeed: 500 })

    } if (this.state.bounces > 20) {
      clearInterval(this.state.gameRefreshInterval)
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 400 / 30) });
      this.setState({ gameSpeed: 400 })

    }
  }

  componentWillUnmount() {
    clearInterval(this.state.gameRefreshInterval);
  }

  updateDirection() {
    this.level();

    this.game.ballX += this.game.ballSpeedX;
    this.game.ballY += this.game.ballSpeedY;

    if (this.game.ballX < 0) {
      this.game.ballSpeedX *= -1;
      this.beepSound()
    }
    if (this.game.ballX > this.game.gameBoard.width) {
      this.game.ballSpeedX *= -1;
      this.beepSound()
    }
    if (this.game.ballY < 0) {
      this.game.ballSpeedY *= -1;
      this.beepSound()
    }
    if (this.game.ballY > this.game.gameBoard.height) {
      this.resetBall();
      this.setState({ bounces: 0 })
      this.failureSound();
      clearInterval(this.state.gameRefreshInterval);
      this.gameOver();

    }


    let paddleTopEdgeY = this.game.gameBoard.height - this.game.paddleDistFromEdge;
    let paddleBottomEdgeY = paddleTopEdgeY + this.game.paddleHeight;
    let paddleLeftEdgeX = this.game.paddleX;
    let paddleRightEdgeX = paddleLeftEdgeX + this.game.paddleWidth;

    if (this.game.ballY > paddleTopEdgeY &&
      this.game.ballY < paddleBottomEdgeY &&
      this.game.ballX > paddleLeftEdgeX &&
      this.game.ballX < paddleRightEdgeX) {
      this.game.ballSpeedY *= -1;

      this.setState({ bounces: this.state.bounces + 1 })
      this.setHighScore();
      this.beepSound();


    }
  }
  gameOver() {
    this.pauseBackgroundSound();
    this.setState({
      gameStatus: false
    })
  }


  setHighScore() {
    let highScore = localStorage.getItem("highScore");

    if (highScore < this.state.bounces) {
      localStorage.setItem("highScore", this.state.bounces);
    }
  }

  printElements() {
    this.game.context.fillStyle = 'black';
    this.game.context.fillRect(0, 0, this.game.gameBoard.width, this.game.gameBoard.height)

    this.game.context.fillStyle = 'white';
    this.game.context.fillRect(this.game.paddleX, this.game.gameBoard.height - this.game.paddleDistFromEdge - this.game.paddleHeight, this.game.paddleWidth, this.game.paddleHeight)

    this.game.context.fillStyle = 'white';
    this.game.context.beginPath();
    this.game.context.arc(this.game.ballX, this.game.ballY, 10, 0, Math.PI * 2, true);
    this.game.context.fill();

  }

  updateAll() {
    this.printElements();
    this.updateDirection();

  }

  updateMousePosition(ev) {
    let rect = this.refs.canvas.getBoundingClientRect();
    let mouseX = ev.clientX - rect.left;
    this.game.paddleX = mouseX - (this.game.paddleWidth / 2);

  }

  resetBall() {
    this.game.ballX = this.game.gameBoard.width / 2;
    this.game.ballY = this.game.gameBoard.height / 4;


  }
  backgroundSound() {
    let soundEfx;
    soundEfx = document.getElementById("soundEfx");
    soundEfx.volume = 0.2
    soundEfx.play();

  }
  pauseBackgroundSound() {
    let soundEfx;
    soundEfx = document.getElementById("soundEfx");
    soundEfx.pause();
  }
  beepSound() {
    let beepSound;
    beepSound = document.getElementById("beepSound");
    beepSound.volume = 0.5
    beepSound.play();

  }
  failureSound() {
    let failureSound;
    failureSound = document.getElementById("failureSound");
    failureSound.volume = 0.2
    failureSound.play();
  }

  setCanvasSize() {
    if (this.state.isFullScreen) {
      return 'game-board-paddle game-board-paddle--full-screen'
    } else return 'game-board-paddle';
  }
  toggleFullScreen() {
    this.setState({
      isFullScreen: !this.state.isFullScreen
    })
  }
  startGame() {
    if (this.state.gameRefreshInterval) {
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 1000 / 30) });
      this.setState({ gameSpeed: 1000 })
      this.backgroundSound()
      this.setState({
        gameStatus: true
      })

    }

  }
  startEndGame() {
    if (!this.state.gameRefreshInterval) {
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, this.game.gameSpeed / 30) })
      this.backgroundSound()
    } else {
      clearInterval(this.state.gameRefreshInterval);
      this.setState({ gameRefreshInterval: null });
      this.pauseBackgroundSound();
    }
    this.setState({
      gameStatus: true
    })
  }

  render() {
    let pauseResume;

    if (this.state.gameRefreshInterval) {
      pauseResume = <div onClick={this.startEndGame.bind(this)} className="menu-text pause">PAUSE</div>;
    } else {
      pauseResume = <div onClick={this.startEndGame.bind(this)} className="menu-text pause">RESUME</div>;
    }

    let gameOver;

    if (this.state.gameStatus === false) {
      gameOver = <div onClick={this.startGame.bind(this)} className="gameover">Game Over<div className="h5">start again</div></div>;

    }

    return (
      <>
        <button onClick={this.toggleFullScreen.bind(this)} style={{ cursor: 'pointer' }} className="full">⤡</button>
        <div className="scanlines">
          <div className="screen">
            <div className="overlay">
              <div className="text">
                <span >AV-1</span>
              </div>
              <div className="menu">
                <header>
                  <div className="menu-text">
                    Paddle Game</div>
                  {pauseResume}
                </header>
                <div className="game-field">
                  {gameOver}
                  <audio id="soundEfx" src={soundEfx} style={{ display: 'none' }} loop></audio>
                  <audio id="beepSound" src={beepSound} style={{ display: 'none' }}></audio>
                  <audio id="failureSound" src={failureSound} style={{ display: 'none' }}></audio>
                  <canvas onDoubleClick={this.toggleFullScreen.bind(this)} className={this.setCanvasSize()} ref="canvas" width="600" height="400"></canvas></div>

                <footer>
                  <div className="key"><h1>High Score: {localStorage.getItem("highScore")}</h1>
                  </div>
                  <div className="key">
                    <h2>Current bounces: {this.state.bounces}</h2></div>

                </footer>
              </div>
            </div>
          </div>
        </div>
        <div className="gameover"></div>
      </>
    );
  }
}


export default PaddleGame;
