/** 
 * This class renders the sections in dashboard where users can input skills and locations
*/

import React, { Component } from 'react';
import Keyword from './Keyword.js'
import "./css/AddKeyword.css"

class AddKeyword extends Component{

    constructor(){
        super();

        // setup default states
        this.state={
            newKeyword: '', // keep track of users input
            addKeyword: false, // if user have clicked add button
            keywords: [] // store users input
        };

        // bind methods
        this.addKeyword = this.addKeyword.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this)

    }

    // read users input as they type
    handleKeywordChange(event){
        this.setState({newKeyword: event.target.value});
    }

    // when users click the add button
    addKeyword(event){
        
        event.preventDefault()
        
        var keywords = this.state.keywords;

        // reject input if its empty
        if (this.state.newKeyword !== ""){
            keywords.push(this.state.newKeyword);

            this.setState({
                addKeyword: true,
                keywords: keywords,
                newKeyword: ''
            });            
        }
    }

    render(){

        // render add skill keywords
        if(this.props.type === "skill"){

            // if no skill have been added
            if (!this.state.addKeyword){
                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. JavaScript"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Skill</button>
                                <small className="form-text text-muted add-keyword-instruction">Don't forget to click Add Skill.</small>
                            </div>
                        </form>
                    </div>
                );
            } else if (this.state.addKeyword){ // if at least one skill have been added

                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. JavaScript"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Skill</button>
                                <small className="form-text text-muted add-keyword-instruction">Don't forget to click Add Skill.</small>
                                <br></br>
                                {this.state.keywords.map((keyword, id) => 
                                <React.Fragment key={id}>
                                    <Keyword keyword={keyword} type={this.props.type}/>
                                </React.Fragment>
                            )}
                            </div>
                        </form>
                    </div>
                );
            }

        } else if (this.props.type === "location"){ // render add location keywords

            // if no location have been added
            if (!this.state.addKeyword){
                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. Toronto"></input>
                                <button className="btn btn-outline-warning" id="add-keyword-btn" type="submit">Add Location</button>
                                <small className="form-text text-muted add-keyword-instruction">Don't forget to click Add Location.</small>
                            </div>
                        </form>
                    </div>
                );
            } else if (this.state.addKeyword){ // if at least one location have been added

                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. Toronto"></input>
                                <button className="btn btn-outline-warning" id="add-keyword-btn" type="submit">Add Location</button>
                                <small className="form-text text-muted add-keyword-instruction">Don't forget to click Add Location.</small>
                                <br></br>
                                {this.state.keywords.map((keyword, id) => 
                                <React.Fragment key={id}>
                                    <Keyword keyword={keyword} type={this.props.type}/>
                                </React.Fragment>
                            )}
                            </div>
                        </form>
                    </div>
                );
            }
        }
    }
}

export default AddKeyword