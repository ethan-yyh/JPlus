/**
 * This class renders a component for each keyword in dashboard
 * this class is used for both displaying keywords at the top of dashboad 
 * and keywords under each add keyword / location section 
 */

import React, { Component } from 'react';
import "./css/Keyword.css"

class Keyword extends Component{

    constructor(){
        super();
        this.state = {
            show: true // keep track of the visibility of this component
        }

        // bind methods
        this.hideComponent = this.hideComponent.bind(this);
    }

    // set this component to invisible
    hideComponent(){
        this.setState({
            show: false
        });
    }

    render(){

        // add blue label for skill keyword
        if(this.props.type === "skill"){

            // if this component is visible
            if (this.state.show){
                return(
                    <div className="keyword" id={this.props.keyword}>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-outline-primary skill" id="keyword-btn" disabled>{this.props.keyword}</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.hideComponent}>x</button>
                        </div>
                        
                    </div>
                );
            } else if (!this.state.show){ // if not visible, then not render it
                return(<div id="hidden"></div>);
            }

        } else if (this.props.type === "location"){ // add dark blue label for location keyword

            // if this component is visible
            if (this.state.show){
                return(
                    <div className="keyword" id={this.props.keyword}>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-outline-warning location" id="keyword-btn" disabled>{this.props.keyword}</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.hideComponent}>x</button>
                        </div>
                        
                    </div>
                );
            } else if (!this.state.show){ // if not visible, then not render it
                return(<div id="hidden"></div>);
            }
        }
        
    }
}

export default Keyword