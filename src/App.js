import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import TicTacToe from "./TicTacToe/TicTacToe";
import PaddleGame from "./PaddleGame/PaddleGame"
import lang from "./lang.json"



class App extends React.Component {
  constructor() {
    super();


    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en')
    }
  }

  render() {
    return (
      <>
        <Router>
          <div className="container">
            <Nav className="navigation " variant="pills" defaultActiveKey="/TicTacToe">
              <Nav.Item>
                <Link className="nav-link" to="/">
                  {lang[localStorage.getItem('lang')].homepage}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link nav-tic-tac" to="/TicTacToe">
                  {lang[localStorage.getItem('lang')].tictactoe}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/PaddleGame" >
                  {lang[localStorage.getItem('lang')].paddlegame}
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
