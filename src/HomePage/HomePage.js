import React from "react";
import lang from "../lang.json"
import "./HomePage.css";
import catSound from './cat.wav'



class HomePage extends React.Component {

  setLanguage(lang) {
    localStorage.setItem('lang', lang);

  }

  catSound() {
    let catSound;
    catSound = document.getElementById("catSound");
    catSound.volume = 0.1
    setTimeout(function () {

      catSound.play();

    }, 6000)
    catSound.pause();
  }

  render() {


    return (

      <div className="home">

        <div className="main">
          <h1 className="title">{lang[localStorage.getItem('lang')].title}</h1>
          <h3 className="desc">{lang[localStorage.getItem('lang')].desc}</h3>
        </div>
        <div onMouseEnter={this.catSound.bind(this)} className="meow">
          <audio id="catSound" src={catSound} style={{ display: 'none' }}></audio>
          <div className="cat">
            <div className="cat-inner">
            </div>
            <div className="cat-head">
              <div className="cat-ear"></div>
              <div className="cat-ear2"></div>
              <div className="cat-nose"></div>
              <div className="cat-mouth"><div className="cat-meow"></div></div>
              <div className="cateye">
                <div className="cateye inner"></div>
                <div className="cateye inner inner-2"></div>
                <div className="cateyelid top"></div>
                <div className="cateyelid bottom"></div>
              </div>
              <div className="cateye2">
                <div className="cateye inner"></div>
                <div className="cateye inner inner-2"></div>
                <div className="cateyelid top"></div>
                <div className="cateyelid bottom"></div>
              </div>
            </div>
            <div className="cat-leg"></div>
            <div className="cat-foot"></div>
            <div className="cat-leg-front"></div>
            <div className="cat-foot-front"></div>
            <div className="cat-hind-leg"></div>
            <div className="cat-hind-leg-top"></div>
            <div className="cat-hind-foot"></div>
            <div className="cat-hind-paw"></div>
            <div className="cat-hind-leg2"></div>
            <div className="cat-hind-leg-top2"></div>
            <div className="cat-hind-foot2"></div>
            <div className="cat-hind-paw2"></div>
            <div className="cat-tail"></div>
            <div className="cat-tail-end"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
