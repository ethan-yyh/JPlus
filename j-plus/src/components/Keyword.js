import React, { Component } from 'react';
import "./Keyword.css"

class Keyword extends Component{

    constructor(){
        super();
        this.state = {
            show: true
        }
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(){
        this.setState({
            show: false
        });

        // need to update database
        // remove(this.props.keyword)
    }
    render(){

        // add blue label for skill keyword
        if(this.props.type === "skill"){

            if (this.state.show){
                return(
                    <div className="keyword" id={this.props.keyword}>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-outline-primary" id="keyword-btn" disabled>{this.props.keyword}</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.hideComponent}>x</button>
                        </div>
                        
                    </div>
                );
            } else if (!this.state.show){
                return(<div id="hidden"></div>);
            }
        } else if (this.props.type === "location"){ // add dark blue label for location keyword
            if (this.state.show){
                return(
                    <div className="keyword" id={this.props.keyword}>
                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                            <button type="button" className="btn btn-outline-primary" id="keyword-btn" disabled>{this.props.keyword}</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.hideComponent}>x</button>
                        </div>
                        
                    </div>
                );
            } else if (!this.state.show){
                return(<div id="hidden"></div>);
            }
        }
        
    }
}

export default Keyword