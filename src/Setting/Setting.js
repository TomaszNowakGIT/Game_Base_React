import React from "react";
import "./Setting.css";
import { EventEmitter } from "../EventEmitter";



class Setting extends React.Component {

  setLanguage(lang) {
    localStorage.setItem('lang', lang);
    EventEmitter.dispatch('langChange', true);

  }

  render() {


    return (

      <div className="setting">
        <div className="option">
          <h5>Please select language</h5>
          <button onClick={this.setLanguage.bind(this, 'pl')} className="btn btn-danger">PL</button>
          <button onClick={this.setLanguage.bind(this, 'en')} className="btn btn-primary">EN</button>
        </div>
      </div>
    );
  }
}

export default Setting;
