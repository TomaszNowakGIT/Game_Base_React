import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./App.css";
import HomePage from "./HomePage/HomePage";
import TicTacToe from "./TicTacToe/TicTacToe";
import PaddleGame from "./PaddleGame/PaddleGame";
import lang from "./lang.json";
import Setting from "./Setting/Setting";
import { EventEmitter } from "./EventEmitter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appRefreshed: null
    };

    let langs = ["en", "pl"];

    if (
      !localStorage.getItem("lang") ||
      localStorage.getItem("lang") === undefined ||
      langs.indexOf(localStorage.getItem("lang")) < 0
    ) {
      localStorage.setItem("lang", "en");
    }
    EventEmitter.subscribe("langChange", () => {
      this.setState({ appRefreshed: new Date() });
    });
  }

  render() {
    return (
      <>
        <Router>
          <div className='container'>
            <Nav
              className='navigation navi'
              variant='pills'
              defaultActiveKey='/TicTacToe'>
              <Nav.Item>
                <Link className='nav-link' to='/'>
                  {lang[localStorage.getItem("lang")].homepage}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link nav-tic-tac' to='/TicTacToe'>
                  {lang[localStorage.getItem("lang")].tictactoe}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to='/PaddleGame'>
                  {lang[localStorage.getItem("lang")].paddlegame}
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to='/Setting'>
                  {lang[localStorage.getItem("lang")].setting}
                </Link>
              </Nav.Item>
            </Nav>
          </div>

          <div className='container'>
            <Route exact path='/' component={HomePage} />
            <Route path='/tictactoe' component={TicTacToe} />
            <Route path='/paddlegame' component={PaddleGame} />
            <Route path='/setting' component={Setting} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
