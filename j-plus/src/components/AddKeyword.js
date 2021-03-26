import React, { Component } from 'react';
import Keyword from './Keyword.js'
import "./AddKeyword.css"

class Footer extends Component{

    constructor(){
        super();

        this.state={
            newKeyword: '',
            addKeyword: false,
            keywords: []
        };

        var keywords = []
        this.addKeyword = this.addKeyword.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this)

    }

    handleKeywordChange(event){
        this.setState({newKeyword: event.target.value});
    }

    addKeyword(event){
        
        event.preventDefault()
        
        var keywords = this.state.keywords;

        if (this.state.newKeyword != ""){
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

            if (!this.state.addKeyword){
                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. JavaScript"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Skill</button>
                            </div>
                        </form>
                    </div>
                );
            } else if (this.state.addKeyword){

                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. JavaScript"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Skill</button>
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

            if (!this.state.addKeyword){
                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. Toronto"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Location</button>
                            </div>
                        </form>
                    </div>
                );
            } else if (this.state.addKeyword){

                var message = "You added:"
                return(
                    <div>
                        <form onSubmit={this.addKeyword}>
                            <div className="form-group">
                                <input className="form-control" type="text" id="input-field" value={this.state.newKeyword} onChange={this.handleKeywordChange} placeholder="e.g. Toronto"></input>
                                <button className="btn btn-outline-primary" id="add-keyword-btn" type="submit">Add Location</button>
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

export default Footer