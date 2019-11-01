import React, { Component } from 'react';
import "./app.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='appHeader' id='appHeader'><Header/></div>
        <div id='appContainer' className='appContainer'><AppBody/></div>
        <div className='appFooter' id='appFooter'>Copyright © 2019 Arumosam.lk All Rights Reserved.</div>
      </div>
    );
  }
}

export default App;


