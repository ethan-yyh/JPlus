import { Route } from "react-router-dom"; // for multi page application
import Home from './pages/Home.js';
//import Resume from './Resume/Resume.js';
import React, { Component } from 'react';
import 'bootswatch/dist/litera/bootstrap.min.css';
import Dashboard from "./pages/Dashboard.js";
import JobList from "./pages/JobList.js";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={JobList}/>
      </div>
    );
  } // end of render
}

export default App;
