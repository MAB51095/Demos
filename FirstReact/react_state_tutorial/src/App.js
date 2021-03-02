import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NewComp from './Components/NewComp';

 class App extends React.Component {
  styles={
    fontStyle: "bold",
    color: "teal"
  };
  render() {
    return (
      <div className="App">
       <h1 style={this.styles}>Welcome</h1>
       <NewComp></NewComp>
      </div>
    );
  }
}

export default App;