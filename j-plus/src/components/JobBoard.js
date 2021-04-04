import {React, Component} from "react";
import JobCard from "./JobCard.js";
import "./css/JobBoard.css";

class JobBoard extends Component{

    render(){

        if(this.props.jobBoard.length === 0){
            return(

                <div className="job-board">
                    <h5 className="job-board-title">No result found in {this.props.location}</h5>   
                </div>
                
                
            );
        } else {

            return(

                <div className="job-board">
                    <h5 className="job-board-title">Jobs in {this.props.location} that match your skills</h5>
                                    
                    {this.props.jobBoard.map((job, id) => 
                        
                            <JobCard key={id} job={job}/> 
                    )}
                </div>
                
                
            );
        }
    }
}

export default JobBoard;