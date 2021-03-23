import { React, Component } from 'react';
import "./NewDocument.css";

class NewDocument extends Component{
    render(){
        var message = "Start by uploading your resume.";
        var header = "Welcome to J+";

        return(
            <div className="jumbotron">
                <h1 className="display-3" id="header">{header}</h1>
                <p className="lead">{message}</p>
                <form>
                    <div className="form-grpoup">
                        <input type="file" class="form-control-file" aria-describedby="fileHelp" placeholder="Upload Resume" id="file-input"></input>
                    </div>
                </form>
                <hr className="my-4"></hr>
            </div>
        );
    } // end of render
} // end of NewDocument

export default NewDocument;