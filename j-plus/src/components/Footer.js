/**
 * This class renders a footer at the bottom of the page
 */

import React, { Component } from 'react';
import "./css/Footer.css"

class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <p id="copyright" className="lead">J+ Copyrighted</p>
            </div>
        );
    }
}

export default Footer