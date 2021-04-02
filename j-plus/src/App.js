import { Route } from "react-router-dom"; // for multi page application
import Home from './pages/Home.js';
//import Resume from './Resume/Resume.js';
import React, { Component } from 'react';
import 'bootswatch/dist/litera/bootstrap.min.css';
import Dashboard from "./pages/Dashboard.js";
import JobList from "./pages/JobList.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard/:username/:firstname" component={Dashboard}/>
        <Route exact path="/joblist" component={JobList}/>
        <Route exact path="/about" component={About}/>

      </div>
    );
  } // end of render
}

export default App;
