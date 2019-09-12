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
      paddleX: 400
    }

    this.state = {
      gameRefreshInterval: null,
      bounces: 0
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
    if (this.state.bounces > 3) {
      this.setState({ gameRefreshInterval: setInterval(this.updateAll, 1000 / 60) });

    }
  }

  componentWillUnmount() {
    clearInterval(this.state.gameRefreshInterval);
  }
  //snow() {

  //  let ctx = this.refs.canvas2.getContext('2d');
  //  var w = ctx.canvas.width,
  //    h = ctx.canvas.height,
  //    d = ctx.createImageData(w, h),
  //    b = new Uint32Array(d.data.buffer),
  //    len = b.length;

  //  for (var i = 0; i < len; i++) {
  //    b[i] = ((255 * Math.random()) | 0) << 24;
  //  }

  //  ctx.putImageData(d, 0, 0);
  // }



  updateDirection() {
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
    this.game.context.filter = 'blur(1px)';
    this.game.gameBoard.animation = 'jerkup 100ms infinite';

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


  render() {
    return (
      <>
        <div className="scanlines">
          {/* <canvas ref="canvas2" className="picture" width="600" height="400"></canvas> */}
          <div className="screen">


            <div className="overlay">

              <div className="text">
                <span >AV-1</span>
              </div>
              <div className="menu">
                <header>
                  <div className="menu-text">
                    Poddle Game</div>
                  <div className="menu-text">PAUSE</div>
                </header>
                <div className="game-field">
                  <audio id="soundEfx" src={soundEfx} style={{ display: 'none' }} loop></audio>
                  <audio id="beepSound" src={beepSound} style={{ display: 'none' }}></audio>
                  <audio id="failureSound" src={failureSound} style={{ display: 'none' }}></audio>
                  <canvas ref="canvas" width="600" height="400"></canvas></div>
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
      </>
    );
  }
}


export default PaddleGame;
