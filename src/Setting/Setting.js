import React from "react";
import "./Setting.css";
import { EventEmitter } from "../EventEmitter";
import lang from "../lang.json";
import trash from "./trash.mp3";
import plate from "./plate.mp3";

class Setting extends React.Component {
  setLanguage(lang) {
    localStorage.setItem("lang", lang);
    EventEmitter.dispatch("langChange", true);
  }
  resetScore() {
    localStorage.setItem("highScore", 0);
  }
  trashSoundStart() {
    let trash;
    trash = document.getElementById("trash");
    trash.volume = 0.1;
    trash.play();
    this.trashAnimationStart();
  }
  trashAnimationStart() {
    let trashSmell;
    trashSmell = document.getElementById("smells");
    trashSmell.style.animationPlayState = "running";
    trashSmell.style.display = "block";
  }
  trashAnimationStop() {
    let trashSmell;
    trashSmell = document.getElementById("smells");
    //trashSmell.style.animationPlayState = "running";
    trashSmell.style.display = "none";
  }

  plateSoundStart() {
    let plate;
    plate = document.getElementById("plate");
    plate.volume = 0.1;
    plate.play();
    this.flyAnimationStart();
  }
  flyAnimationStart() {
    let fly1;
    fly1 = document.getElementById("fly1");
    fly1.style.animationPlayState = "running";
    fly1.style.display = "block";
  }

  render() {
    return (
      <div className='setting'>
        <div className='option setting-menu'>
          <h5> {lang[localStorage.getItem("lang")].pleaseSelect}</h5>
          <button
            onClick={this.setLanguage.bind(this, "pl")}
            className='btn btn-danger'>
            PL
          </button>
          <button
            onClick={this.setLanguage.bind(this, "en")}
            className='btn btn-primary'>
            EN
          </button>
        </div>
        <div className='option1 setting-menu'>
          <h5> {lang[localStorage.getItem("lang")].scoreReset}</h5>
          <button
            onClick={this.resetScore.bind(this)}
            className='btn btn-danger'>
            RESET
          </button>
        </div>
        <div className='plate' onMouseEnter={this.plateSoundStart.bind(this)}>
          <audio id='plate' src={plate} style={{ display: "none" }}></audio>
          created by <a href={"mailto:tn@mpro.pl"}>MPRO</a>
          <div id='fly1' className='fly1'></div>
        </div>
        <div
          className='trash'
          onMouseEnter={this.trashSoundStart.bind(this)}
          onMouseLeave={this.trashAnimationStop.bind(this)}>
          <audio id='trash' src={trash} style={{ display: "none" }}></audio>
          <div className='pokrywka'></div>
          <div className='blackhole'>
            <div class='eyes'>
              <div class='eye'>
                <div class='ball'></div>
              </div>
              <div class='eye'>
                <div class='ball'></div>
              </div>
            </div>
          </div>
          <div className='paski'></div>
          <div id='smells' className='smells'></div>
          <div className='fly'></div>
        </div>
      </div>
    );
  }
}

export default Setting;
