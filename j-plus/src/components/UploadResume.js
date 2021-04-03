import { React, Component } from "react"
import "./css/UploadResume.css"

class UploadResume extends Component{

    constructor(){
        super();

        this.state = {
            filename: "None",
            disabled: "disabled"
        }

        this.updateFileName = this.updateFileName.bind(this)
    }

    componentDidMount(){
        document.getElementById("upload-btn").disabled = true
    }

    updateFileName(event){

        event.preventDefault();

        var fullPath = document.getElementById("select-file-btn").value;

        if (fullPath){
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex)
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0){
                filename = filename.substring(1);
            }

            document.getElementById("upload-btn").disabled = false

            this.setState({
                filename: filename
            });
        }
    }







    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label className="btn btn-outline-primary" htmlFor="select-file-btn" id="select-file-btn-label" >Select File</label>
                        <input type="file" className="form-control-file" id="select-file-btn" onChange={this.updateFileName}></input>
                        <button className="btn btn-outline-primary" type="submit" id="upload-btn">Upload</button>
                        <small className="form-text text-muted" id="file-name">You selected: {this.state.filename}</small>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default UploadResume