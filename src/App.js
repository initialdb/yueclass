import React, { Component } from 'react';
import './App.css';
import Home from "./containers/Home/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home history = {this.props.history}/>
      </div>
    );
  }
}

export default App;
