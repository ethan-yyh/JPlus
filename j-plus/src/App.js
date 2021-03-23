import './App.css';
import { Route } from "react-router-dom"; // for multi page application
import Home from './Home/Home.js';
import React, { Component } from 'react';
import 'bootswatch/dist/pulse/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    );
  } // end of render
}

export default App;
