/**
 * This class render a nav bar component at the top of the page
 * currently only used for Home page and About page
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./css/NavBar.css";

class NavBar extends Component{

    render(){

        if(this.props.page === "home"){
            // Home page
            return(
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={`/about`} className="nav-link">About</Link>
                                </li>
                            </ul>
                            <Link to={`/login`} className="btn btn-primary my-2 my-sm-0">Log in</Link>
                            
                        </div>
                    </nav>
                </div>
            );
        } else {
            // About page
            return(
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={`/about`} className="nav-link">About</Link>
                                </li>
                            </ul>
                            
                        </div>
                    </nav>
                </div>
            );
        }

        
        
    }
}



export default NavBar;

