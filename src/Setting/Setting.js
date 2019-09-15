import React from "react";
import "./Setting.css";
import { EventEmitter } from "../EventEmitter";
import lang from "../lang.json";



class Setting extends React.Component {

  setLanguage(lang) {
    localStorage.setItem('lang', lang);
    EventEmitter.dispatch('langChange', true);

  }
  resetScore() {
    localStorage.setItem('highScore', 0);
  }


  render() {


    return (

      <div className="setting">
        <div className="option setting-menu">
          <h5> {lang[localStorage.getItem('lang')].pleaseSelect}</h5>
          <button onClick={this.setLanguage.bind(this, 'pl')} className="btn btn-danger">PL</button>
          <button onClick={this.setLanguage.bind(this, 'en')} className="btn btn-primary">EN</button>
        </div>
        <div className="option1 setting-menu">
          <h5> {lang[localStorage.getItem('lang')].scoreReset}</h5>
          <button onClick={this.resetScore.bind(this)} className="btn btn-danger">RESET</button>
        </div>
        <div className='plate'>created by <a href={"mailto:tn@mpro.pl"}>MPRO</a></div>
      </div>

    );
  }
}

export default Setting;
