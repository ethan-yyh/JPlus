/**
 * This class renders the dashboard page
 * on this page, user can view and modify their keywords
 * they can also upload resume to keyword extraction
 */

// import files
import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Keyword from '../components/Keyword.js';
import AddKeyword from '../components/AddKeyword.js';
import UploadResume from '../components/UploadResume.js';
import './css/Dashboard.css';
import './css/NavBar.css';

class Dashboard extends Component{

    constructor(props){
        super()
        
        // initialize states
        this.state = {
            username: props.match.params.username, // get username from URL
            firstname: props.match.params.firstname, // get username from firstname
            skills: [], // stores skill lables on the page
            locations: [], // stores location lables on the page
            haveSkills: false, // does the user have any skill in database?
            showJobList: false, // directs to job list page if this state is true
            loaded: false // make sure information is all loaded to prevent page refreshing
        }

        // bind methods
        this.getLocations = this.getLocations.bind(this);
        this.displayLabel = this.displayLabel.bind(this);
        this.updateSkills = this.updateSkills.bind(this);
        this.updateLocations = this.updateLocations.bind(this);



        
    }

    // load skills from database
    componentDidMount(){

        // make a get request to retrieveSkillAPI
        fetch(`http://localhost:9000/retrieveSkillAPI?username=${this.state.username}`)
            .then(response=>response.json())
            .then(skills => {

                if(Object.keys(skills).length === 0){
                    this.setState({skills: []});
                    this.getLocations();
                } else {
                    this.setState({skills: skills["skills"]});
                    this.getLocations();
                }
                
                
            });
 
    }

    // load locations from database
    getLocations(){

        console.log("Getting Locations...")

        // make a get request to retrieveLocationAPI
        fetch(`http://localhost:9000/retrieveLocationAPI?username=${this.state.username}`)
            .then(response=>response.json())
            .then(locations => {

                console.log("Locations: " + locations)

                if(Object.keys(locations).length === 0){
                    console.log("This user does not have locations in database.")
                    this.setState({locations: []});
                    this.displayLabel();
                } else {
                    console.log("Locations: " + locations["locations"]);
                    
                    // sometimes locations will be read as string, we need to handle it manually
                    if(typeof locations["locations"] === "string"){
                        console.log("Locations is read as String, converting to array...")
                        
                        var locationsContent = (locations["locations"]).substring(1, locations["locations"].length - 1)
                        console.log("locationsContent: " + locationsContent);
                        var locationsArray = locationsContent.split(",");
                        this.setState({locations: locationsArray});
                    } else {
                        console.log("Locations is properly read as array.")
                        this.setState({locations: locations["locations"]});
                    }
                    this.displayLabel();
                }
                
                
            });
    }

    // display skill and location labels
    displayLabel(){

        // no skills found in database
        console.log("number of skills:" + this.state.skills.length)
        if(this.state.skills.length === 0){
            this.setState({
                loaded: true,
                haveSkills: false
            });
        } else {
            this.setState({
                loaded: true,
                haveSkills: true
            })
        }
    }

    // update skills in the database
    updateSkills(event){
        event.preventDefault();

        // read each skill element on the screen then save them to an array
        var skills = []
        var skillElement = document.getElementsByClassName("skill")

        for (var i = 0, len = skillElement.length; i < len; i++) {
            skills.push(skillElement[i].firstChild.nodeValue)
        }

        // save the array to state
        this.setState({
            skills: skills
        });
        
        // build request body
        var req = {
            "skills": skills,
            "username": this.state.username
        }

        // make request
        fetch('http://localhost:9000/updateSkillAPI', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
        .then(response => {
            console.log("response received - skill");
            this.updateLocations();
        }); 

    }

    // update locations in the database
    updateLocations(){

        // read each location element on the screen then save them to an array
        var locations = []
        var locationElement = document.getElementsByClassName("location")

        for (var i = 0, len = locationElement.length; i < len; i++) {
            locations.push(locationElement[i].firstChild.nodeValue)
        }

        // save the array to state
        this.setState({
            locations: locations
        });
        
        // build request body
        var req = {
            "locations": locations,
            "username": this.state.username
        }

        // make request
        fetch('http://localhost:9000/updateLocationAPI', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
        .then(response => {
            console.log("response received - location");
            this.setState({showJobList: true});
        }); 

    }


    render(){

        // initialize messages
        var user = this.state.firstname
        var message = "These are the keywords we captured based on your most recent resume/update. You can delete the ones that you think are not accurate.";
        var messageNoSkill = "Start by uploading your resume or adding skills in the following section."
        var message2 = "Have some new skills? No worries, we got you. Add your new skills below."
        var message2NoSKill = "Add new skills manually."
        var message3 = "Let us know which locations you are interested in."
        var message4 = "You can always submit a new resume. Upload a new resume will over-write your previous upload."

        // stay in the same page
        if(this.state.showJobList === false){
            
            if(this.state.loaded === true){
                // user have skills
                if(this.state.haveSkills === true){
                    return(
                        <div>
                            <div>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                                    <div className="collapse navbar-collapse" id="navbarColor03">
                                        <ul className="navbar-nav mr-auto"></ul>
                                        <Link to={'/login'} className="btn btn-outline-primary my-2 my-sm-0" id="logout">Logout</Link>
                                        <button className="btn btn-primary my-2 my-sm-0" onClick={this.updateSkills}>Search Jobs</button>
                                    </div>
                                </nav>
                            </div>

                            <div className="container">
                                <h1 id="greeting-lg">Welcome back, {user}!</h1>
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message}</p>
                                {this.state.skills.map((keyword, id) => 
                                    <React.Fragment key={id}>
                                        <Keyword keyword={keyword} type="skill"/>
                                    </React.Fragment>
                                )}
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message2}</p>
                                <AddKeyword type="skill"/>
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message3}</p>
                                <AddKeyword type="location"/>
                                {this.state.locations.map((keyword, id) => 
                                    <React.Fragment key={id}>
                                        <Keyword keyword={keyword} type="location"/>
                                    </React.Fragment>
                                )}
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message4}</p>
                                <UploadResume username={this.state.username}/>
                                <hr className="my-4"></hr>
                                <button className="btn btn-primary my-2 my-sm-0" onClick={this.updateSkills}>Search Jobs</button>
                            </div>
                            <div className="copyright">
                                <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                            </div>
                            
                        </div>
                    );
                } else {

                    return(
                        <div>
                            <div>
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                                    <div className="collapse navbar-collapse" id="navbarColor03">
                    
                                        <ul className="navbar-nav mr-auto"></ul>
                                        <Link to={'/login'} className="btn btn-outline-primary my-2 my-sm-0" id="logout">Logout</Link>
                                        <button className="btn btn-primary my-2 my-sm-0" onClick={this.updateSkills}>Search Jobs</button>
                                    </div>
                                </nav>
                            </div>

                            <div className="container">
                                <h1 id="greeting-lg">Hi, {user}!</h1>
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{messageNoSkill}</p>
                                <UploadResume username={this.state.username}/>
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message2NoSKill}</p>
                                <AddKeyword type="skill"/>
                                <hr className="my-4"></hr>
                                <p className="lead" id="message">{message3}</p>
                                <AddKeyword type="location"/>
                                {this.state.locations.map((keyword, id) => 
                                    <React.Fragment key={id}>
                                        <Keyword keyword={keyword} type="location"/>
                                    </React.Fragment>
                                )}
                                <hr className="my-4"></hr>
                                <button className="btn btn-primary my-2 my-sm-0" onClick={this.updateSkills}>Search Jobs</button>
                                
                            </div>
                            <div className="copyright">
                                <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                            </div>
                            
                        </div>
                    );

                }
            } else if (this.state.loaded === false){

                return(
                    <div>
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                                <div className="collapse navbar-collapse" id="navbarColor03">
                                    <ul className="navbar-nav mr-auto"></ul>
                                    <Link to={'/login'} className="btn btn-outline-primary my-2 my-sm-0" id="logout">Logout</Link>
                                    <button className="btn btn-primary my-2 my-sm-0" onClick={this.updateSkills}>Search Jobs</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                )
            }
        } else if (this.state.showJobList === true){
            return(
                <div>
                    <Redirect to={`/joblist/${this.state.username}/${this.state.firstname}`}></Redirect>
                </div>
            );
        }

    } // end of render
} // end of Dashboard

export default Dashboard;