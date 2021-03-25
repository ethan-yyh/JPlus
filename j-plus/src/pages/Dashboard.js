// import files
import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Keyword from '../components/Keyword.js';
import './Dashboard.css';

class Dashboard extends Component{

    render(){

        var user = "Ethan";
        var message = "These are they keywords we captured based on your most recent resume. You can delete the ones that you think are not accurate.";
        var message2 = "You can also add some new keywords."

        var keywords = ["JavaScript","Python", "React", "Java", "Machine Learning", "C", "C++", "Cloud Computing"];

        return(
            <div>
                <NavBar/>
                    <div className="container">
                        <h1 id="greeting">Welcome back, {user}!</h1>
                        <hr className="my-4"></hr>
                        <p className="lead" id="message">{message}</p>
                        {keywords.map((keyword, id) => 
                            <React.Fragment key={id}>
                                <Keyword keyword={keyword}/>
                            </React.Fragment>
                        )}
                        <hr className="my-4"></hr>
                        <p className="lead" id="message">{message2}</p>



                    </div>
                <Footer/>
            </div>
        );
    } // end of render
} // end of Dashboard

export default Dashboard;