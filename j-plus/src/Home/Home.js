// import files
import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import './Home.css';

class Home extends Component{
    render(){

        var message = "Job hunting made easy.";
        var header = "Welcome to J+";

        return(
            <div id="home-page">
                <NavBar/>
                    <div id="welcome-message">
                        <h1 className="display-3">{header}</h1>
                        <p className="lead">{message}</p>
                    </div>
                <Footer/>
            </div>
        );
    } // end of render
} // end of Home

export default Home;