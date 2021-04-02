// import files
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import NavBar from '../components/NavBar.js';
// import Footer from '../components/Footer.js';
import Keyword from '../components/Keyword.js';
import AddKeyword from '../components/AddKeyword.js';
import UploadResume from '../components/UploadResume.js';
import './css/Dashboard.css';
import './css/NavBar.css';

class Dashboard extends Component{

    constructor(props){
        super()
        this.state = {
            username: props.match.params.username,
            firstname: props.match.params.firstname,
            skills:["Python"]
        }


        this.updateKeywords = this.updateKeywords.bind(this)
        this.getSkills = this.getSkills.bind(this)



        
    }

    componentDidMount(){
        this.getSkills()
    }

    updateKeywords(event){
        event.preventDefault();

        var skills = []
        var skillElement = document.getElementsByClassName("skill")

        for (var i = 0, len = skillElement.length; i < len; i++) {
            skills.push(skillElement[i].firstChild.nodeValue)
        }

        this.setState({
            skills: skills
        });
        
        var req = {
            "skills": skills,
            "username": this.state.username
        }


        fetch('http://localhost:9000/updateSkillAPI', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
        .then(response => response.json())
        .then(data => console.log(data)); 


    }

    async getSkills(){

        
        const response = await fetch(`http://localhost:9000/retrieveSkillAPI?username=${this.state.username}`)
        const data = await response.json()

        console.log("here")
        this.setState({
            skills: data["skills"]
        });

        // console.log(this.state.username)
        // console.log(this.state.firstname)
        // console.log(this.state.skills)
    



    }

    render(){



        var user = this.state.firstname
        var message = "These are they skills we captured based on your most recent resume. You can delete the ones that you think are not accurate.";
        var message2 = "Have some new skills? No worries, we got you. Add your new skills below."
        var message3 = "Let us know which locations you are interested in."
        var message4 = "You can always submit a new resume. Upload a new resume will over-write your previous upload."

        var keywords = this.state.skills;


        console.log("keywords: " + keywords)
        // if(keywords === undefined){
        //     keywords = ["Python"]
        // }

        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                        <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={`/about`} className="nav-link">About</Link>
                                </li>
                            </ul>
                            <Link to={`/joblist`} className="btn btn-primary my-2 my-sm-0" onClick={this.updateKeywords}>Search Jobs</Link>
                            
                        </div>
                    </nav>
                </div>

                <div className="container">
                    <h1 id="greeting-lg">Welcome back, {user}!</h1>
                    <hr className="my-4"></hr>
                    <p className="lead" id="message">{message}</p>
                    {keywords.map((keyword, id) => 
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
                    <hr className="my-4"></hr>
                    <p className="lead" id="message">{message4}</p>
                    <UploadResume/>
                    <hr className="my-4"></hr>
                </div>
                <div className="copyright">
                    <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                </div>
                
            </div>
        );
    } // end of render
} // end of Dashboard

export default Dashboard;