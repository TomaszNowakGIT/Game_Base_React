import React from "react";
import lang from "../lang.json"
import "./HomePage.css";



class HomePage extends React.Component {

  setLanguage(lang) {
    localStorage.setItem('lang', lang);

  }

  render() {


    return (
      <div className="container center">
        <h1>{lang[localStorage.getItem('lang')].title}</h1>
        <h3>{lang[localStorage.getItem('lang')].desc}</h3>
        <h5>Please select language</h5>
        <button onClick={this.setLanguage.bind(this, 'pl')} className="btn btn-danger">PL</button>
        <button onClick={this.setLanguage.bind(this, 'en')} className="btn btn-primary">EN</button>
      </div>
    );
  }
}

export default HomePage;
