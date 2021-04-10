/**
 * This class renders a job board for a specific city
 * If user has chosen multiple cities, this component will be rendered multiple time
 * Initially, only 6 results are shown to users to save space on the page
 */

import {React, Component} from "react";
import JobCard from "./JobCard.js";
import "./css/JobBoard.css";

class JobBoard extends Component{

    constructor(props){
        super();

        /**
         * props.jobBoard is passed from JobList page as a parameter
         * visibleResult is set to 6 items initially
         */
        this.state = {
            visibleResult: props.jobBoard.slice(0, 6)
        }

        this.showAllResult = this.showAllResult.bind(this);

    }

    // show all results passed from joblist
    showAllResult(event){

        event.preventDefault();

        this.setState({
            visibleResult: this.props.jobBoard
        });

        document.getElementById('show-all').innerHTML = "";
    }



    render(){

        // if jobboard is empty, tell user no result if found
        if(this.props.jobBoard.length === 0){
            return(

                <div className="job-board">
                    <h5 className="job-board-title">No result found in {this.props.location}</h5>   
                </div>
                
                
            );
        } else { // jobboard is not empty

            return(

                <div className="job-board">
                    <h5 className="job-board-title">Jobs in {this.props.location} that match your skills</h5>

                           
                    {this.state.visibleResult.map((job, id) => 
                    
                            <JobCard key={id} job={job}/> 
                    )}
                    <div id="show-all">
                        <button className="btn btn-primary show-all-btn" onClick={this.showAllResult}>Show All</button>
                    </div>
                    
                </div>
                
                
            );
        }
    }
}

export default JobBoard;