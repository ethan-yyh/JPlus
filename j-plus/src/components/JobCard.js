import {React, Component} from "react"
import "./JobCard.css"

class JobCard extends Component{
    constructor(){
        super();

        this.showCard = this.showCard.bind(this);
        console.log(this.props)
        
    }

    showCard(){

        alert("clicked")
    }

    render(){
        return(
            <div className="card border-primary mb-3" id="card" onClick={this.showCard}>
                <div className="card-header">{this.props.job.company}</div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.job.jobtitle}</h4>
                    <small className="card-text">{this.props.job.description}</small>
                </div>
            </div>
        );
    }
}

export default JobCard;