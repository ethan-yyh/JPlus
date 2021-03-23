import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component{
    render(){

        // Home page
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="localhost:3000/" id="logo">J+</a>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href='localhost:3000/'>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='localhost:3000/'>Resume</a>
                            </li>
                        </ul>
                        <button className="btn btn-primary my-2 my-sm-0">Login</button>
                    </div>
                </nav>
            </div>
        );
        
        
    }
}

export default NavBar;

