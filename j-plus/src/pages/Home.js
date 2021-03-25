// import files
import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Home.css';

class Home extends Component{
    render(){

        var message = "Job hunting made easy.";
        var header = "Welcome to J+";

        var keywords = ["123","234","345"];

        return(
            <div id="home-page">
                <NavBar/>
                    <div id="welcome-message">
                        <h1 id="header">{header}</h1>
                        <p className="lead" id="message">{message}</p>
                        <hr className="my-4"></hr>
                        <button type="button" class="btn btn-outline-primary btn-lg" id="get-started">Get Started</button>
                    </div>
                <Footer/>
            </div>
        );
    } // end of render
} // end of Home

export default Home;