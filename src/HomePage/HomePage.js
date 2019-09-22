import React from "react";
import lang from "../lang.json";
import "./HomePage.scss";
import catSound from "./cat.wav";

class HomePage extends React.Component {
  setLanguage(lang) {
    localStorage.setItem("lang", lang);
  }

  catSound() {
    let catSound;
    catSound = document.getElementById("catSound");
    catSound.volume = 0.1;
    setTimeout(function() {
      catSound.play();
    }, 6000);
  }
  catSoundStop() {
    let catSound;
    catSound = document.getElementById("catSound");
    catSound.pause();
  }
  getLocalization() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
      });
    } else {
      console.log("Twoja przęglądarka nie wspiera geolokalizacji");
    }
  }
  
  flyAnimationStart() {
    let fly2;
    let min1 = Math.ceil(10);
    let max1= Math.floor(360);
    let randomInt1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

    let min3 = Math.ceil(10);
    let max3 = Math.floor(300);
    let randomInt3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;  

    let min2 = Math.ceil(10);
    let max2= Math.floor(300);
    let randomInt2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
console.log(randomInt1,randomInt2,randomInt3)
    fly2 = document.getElementById("fly2");
    fly2.style.animationPlayState = "running";
    fly2.animate([
  // keyframes
  { transform: `rotate(20deg) translate(100px,200px)`},
  { transform: `rotate(`+randomInt1+`deg) translate(`+randomInt2+`px,`+randomInt3+`px)`}
 
], {  
  // timing options
  duration: 500,
  iterations: 1,
  easing: "ease-in-out",
  fill: "both"

});
  }

  render() {
    return (
      <div className='home'>
        <div className='main'>
          <h1 className='title'>{lang[localStorage.getItem("lang")].title}</h1>
          <h3 className='desc'>{lang[localStorage.getItem("lang")].desc}</h3>
          <div
            id='fly2'
            className='fly2'
            onMouseLeave={this.flyAnimationStart.bind(this)}></div>
            </div>
        <div className='meow'>
          <audio
            id='catSound'
            src={catSound}
            style={{ display: "none" }}></audio>
          <div
            onMouseEnter={this.catSound.bind(this)}
            onMouseLeave={this.catSoundStop.bind(this)}
            className='cat'>
            <div className='cat-inner'></div>
            <div className='cat-head'>
              <div className='cat-ear'></div>
              <div className='cat-ear2'></div>
              <div className='cat-nose'></div>
              <div className='cat-mouth'>
                <div className='cat-meow'></div>
              </div>
              <div className='cateye'>
                <div className='cateye inner'></div>
                <div className='cateye inner inner-2'></div>
                <div className='cateyelid top'></div>
                <div className='cateyelid bottom'></div>
              </div>
              <div className='cateye2'>
                <div className='cateye inner'></div>
                <div className='cateye inner inner-2'></div>
                <div className='cateyelid top'></div>
                <div className='cateyelid bottom'></div>
              </div>
            </div>
            <div className='cat-leg'></div>
            <div className='cat-foot'></div>
            <div className='cat-leg-front'></div>
            <div className='cat-foot-front'></div>
            <div className='cat-hind-leg'></div>
            <div className='cat-hind-leg-top'></div>
            <div className='cat-hind-foot'></div>
            <div className='cat-hind-paw'></div>
            <div className='cat-hind-leg2'></div>
            <div className='cat-hind-leg-top2'></div>
            <div className='cat-hind-foot2'></div>
            <div className='cat-hind-paw2'></div>
            <div className='cat-tail'></div>
            <div className='cat-tail-end'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
