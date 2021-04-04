import {React, Component} from "react";
import JobCard from "./JobCard.js";
import "./css/JobBoard.css";

class JobBoard extends Component{

    constructor(props){
        super();
        this.state = {
            visibleResult: props.jobBoard.slice(0, 6)
        }

        this.showAllResult = this.showAllResult.bind(this);

    }

    showAllResult(event){

        event.preventDefault();

        this.setState({
            visibleResult: this.props.jobBoard
        });

        document.getElementById('show-all').innerHTML = "";
    }



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