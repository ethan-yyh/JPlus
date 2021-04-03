// import files
import React, { Component } from 'react';
//import NavBar from '../components/NavBar.js';
import {Link} from 'react-router-dom';
// import Footer from '../components/Footer.js';
//import Keyword from '../components/Keyword.js';
//import AddKeyword from '../components/AddKeyword.js';
//import UploadResume from '../components/UploadResume.js';
import './css/JobList.css';
import JobCard from '../components/JobCard.js';

class Dashboard extends Component{

    constructor(props){
        super();
        this.state = {
            username: props.match.params.username,
            firstname: props.match.params.firstname,
            haveSkills: false,
            skills:[],
            locations:[],
            jobs: []
        }

        this.getLocations = this.getLocations.bind(this);
        this.displayJobCards = this.displayJobCards.bind(this);


    }

    componentDidMount(){

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

    getLocations(){

        fetch(`http://localhost:9000/retrieveLocationAPI?username=${this.state.username}`)
            .then(response=>response.json())
            .then(locations => {

                if(Object.keys(locations).length === 0){
                    this.setState({locations: []});
                    this.displayJobCards();
                } else {
                    this.setState({locations: locations["locations"]});
                    this.displayJobCards();
                }
                    
            });
    }

    displayJobCards(){

        if(this.state.skills.length === 0){
            this.setState({haveSkills: false});
        } else {

            // build request body
            const req = {
                "skills": this.state.skills,
                "locations": this.state.locations,
            }

            // make request
            fetch(`http://localhost:9000/searchJobAPI`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    jobs: data["results"],
                    haveSkills: true
                });

            })

        }
        

    }



    render(){

        var user = this.state.firstname;
        var message = "Click on the ones that you are interested in. A new page will open up with more detail!";
        var messageNoSkill = "Sorry we do not find a record of your skills in our database. You can add skills or upload your resume in the dashboard.";
        
        if (this.state.haveSkills){
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                            <div className="collapse navbar-collapse" id="navbarColor03">
                                
                                <ul className="navbar-nav mr-auto"></ul>
                                <Link to={'/login'} className="btn btn-outline-primary my-2 my-sm-0" id="logout">Logout</Link>
                                <Link to={`/dashboard/${this.state.username}/${this.state.firstname}`}className="btn btn-primary my-2 my-sm-0">Back to Dashboard</Link>
                                
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="container">
                            <h1 id="greeting">Hey {user}, we found these for you!</h1>
                            <hr className="my-4"></hr>
                            <p className="lead" id="message">{message}</p>
                            
                            {this.state.jobs.map((job, id) => 
                                <React.Fragment key={id}>
                                    <JobCard job={job}/>
                                </React.Fragment>
                            )}
                            <br></br>
                            <small className="text-primary">Imformation are retrieved from Indeed</small>
                            <hr className="my-4"></hr>
                            
                        </div>
                        <div className="copyright">
                            <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                        </div>
                        
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
                                <Link to={`/dashboard/${this.state.username}/${this.state.firstname}`}className="btn btn-primary my-2 my-sm-0">Back to Dashboard</Link>
                                
                            </div>
                        </nav>
                    </div>

                    <div>
                        <div className="container">
                            <h1 id="greeting">Hey {user}, tell us more about you!</h1>
                            <hr className="my-4"></hr>
                            <p className="lead" id="message">{messageNoSkill}</p>
                            <hr className="my-4"></hr>
                        </div>
                        <div className="copyright">
                            <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                        </div>
                        
                    </div>



                </div>
            );
        }
    } // end of render
} // end of Dashboard

export default Dashboard;