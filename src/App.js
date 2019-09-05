import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import TicTacToe from "./TicTacToe/TicTacToe";
import PaddleGame from "./PaddleGame/PaddleGame"



class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <div className="container">
            <Nav className="navigation " variant="pills" defaultActiveKey="/TicTacToe">
              <Nav.Item>
                <Link className="nav-link" to="/">
                  HomePage
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link nav-tic-tac" to="/TicTacToe">
                  Tic Tac Toe
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/PaddleGame" >
                  PaddleGame
                </Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="container">
            <Route exact path="/" component={HomePage} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/paddlegame" component={PaddleGame} />
          </div>
        </Router>

      </>
    );
  }
}

export default App;
