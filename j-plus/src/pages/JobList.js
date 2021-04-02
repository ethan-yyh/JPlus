// import files
import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Keyword from '../components/Keyword.js';
import AddKeyword from '../components/AddKeyword.js';
import UploadResume from '../components/UploadResume.js';
import './css/JobList.css';
import JobCard from '../components/JobCard.js';

class Dashboard extends Component{

    render(){

        var user = "Ethan";
        var message = "Click on the ones that you are interested in. A new page will open up with more detail!";

        // dummy data
        var jobs = [
            {
                "job": {
                    "jobtitle": "fake job one",
                    "company": "fake company one",
                    "description": "description description description description description description description description description description description"
                }
            },
            {
                "job": {
                    "jobtitle": "fake job two",
                    "company": "fake company two",
                    "description": "description description description description description description description description description description description"
                }
            },
            {
                "job": {
                    "jobtitle": "fake job three",
                    "company": "fake company three",
                    "description": "description description description description description description description description description description description"
                }
            },
            {
                "job": {
                    "jobtitle": "fake job four",
                    "company": "fake company four",
                    "description": "description description description description description description description description description description description"
                }
            },
            {
                "job": {
                    "jobtitle": "fake job five",
                    "company": "fake company five",
                    "description": "description description description description description description description description description description description"
                }
            },
            {
                "job": {
                    "jobtitle": "fake job six",
                    "company": "fake company six",
                    "description": "description description description description description description description description description description description"
                }
            },
            ]

    

        return(
            <div>
                <NavBar page="joblist"/>
                <div className="container">
                    <h1 id="greeting">Hey {user}, we found these for you!</h1>
                    <hr className="my-4"></hr>
                    <p className="lead" id="message">{message}</p>
                    
                    {jobs.map((job, id) => 
                        <React.Fragment key={id}>
                            <JobCard job={job.job}/>
                        </React.Fragment>
                    )}
                    <small>Imformation are retrieved from Indeed</small>
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