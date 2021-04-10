/**
 * This class renders the Home page
 */

// import files
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import './css/Home.css';


class Home extends Component{
    render(){

        // initialize messages
        var message = "Job hunting made easy.";
        var header = "Welcome to J+";

        return(
            <div id="home-page">
                <NavBar page="home"/>
                <div id="welcome-message">
                    <h1 id="header">{header}</h1>
                    <p className="lead" id="message">{message}</p>
                    <hr className="my-4"></hr>
                    <Link to={`/register`} type="button" className="btn btn-outline-primary btn-lg" id="get-started">Get Started</Link>
                    
                </div>
                <Footer />  
            </div>
            
        );
    } // end of render
} // end of Home

export default Home;