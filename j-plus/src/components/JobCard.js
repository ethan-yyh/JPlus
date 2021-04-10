/**
 * This class renders a job card for each item in job board
 * job card contains information relating to each job including company name, city, province, job title and job description 
 */

import {React, Component} from "react";
import "./css/JobCard.css"

class JobCard extends Component{
    constructor(){
        super();

        // bind methods
        this.showCard = this.showCard.bind(this);
        
    }

    // open up a new page that directs to corresponding job link in Indeed
    showCard(){
        window.open(this.props.job.url, "_blank");
    }

    render(){
        return(
            <div className="card border-primary mb-3" id="card" onClick={this.showCard}>
                <div className="card-header">{this.props.job.company} - {this.props.job.city}, {this.props.job.province}</div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.job.jobtitle}</h4>
                    <small className="card-text">{this.props.job.jobdescription}</small>
                </div>
            </div>
        );
    }
}

export default JobCard;