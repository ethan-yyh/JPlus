/**
 * This class renders a component for user to upload resume
 */

import { React, Component } from "react"
import "./css/UploadResume.css"

class UploadResume extends Component{

    constructor(){
        super();

        this.state = {
            filename: "None", // name of the file selected by user
            disabled: "disabled" // upload button is disabled or not
        }

        // bind methods
        this.updateFileName = this.updateFileName.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    // disable upload button
    componentDidMount(){
        document.getElementById("upload-btn").disabled = true
    }

    /**
     * when user selects a file
     * get the name of the file
     */
    updateFileName(event){

        event.preventDefault();

        // get path of the file selected
        var fullPath = document.getElementById("select-file-btn").value;
        console.log(fullPath)

        // if path exists
        if (fullPath){

            // parse the name of the file
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex)
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0){
                filename = filename.substring(1);
            }

            // upload button is enabled
            document.getElementById("upload-btn").disabled = false

            // update file name in state
            this.setState({
                filename: filename
            });
        }
    }

    /**
     * pass the selected file to uploadAPI
     */
    uploadFile(event){

        event.preventDefault();

        // get the file
        var input = document.querySelector('input[type="file"]')

        console.log("upload file called.. ")
        console.log("files: " + input.files[0])

        // insert file and username in a formdata object
        var formData = new FormData()
        formData.append('file', input.files[0])
        console.log("calling upload API with username: " + this.props.username)
        formData.append('username', this.props.username)

        // show a warning indicating file being uploaded
        document.getElementById('file-uploaded-successfully').innerHTML = 
            `
            <div class="alert alert-warning">
            <strong>Uploading...</strong> Your file is being uploaded. This may take up to 1 minute.
            </div>
            `

        // send post request to uploadAPI
        fetch('http://localhost:9000/uploadAPI', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            console.log(response);

            // update warning
            document.getElementById('file-uploaded-successfully').innerHTML = 
            `
            <div class="alert alert-success">
            <strong>Uploaded Successfully</strong> Your file was uploaded successfully. Refresh the page to see the keywords we captured based on your resume.
            </div>
            `
        });


    }

    render(){
        return(
            <div>
                <form onSubmit={this.uploadFile}>
                    <div className="form-group">
                        <label className="btn btn-outline-primary" htmlFor="select-file-btn" id="select-file-btn-label" >Select File</label>
                        <input type="file" className="form-control-file" id="select-file-btn" onChange={this.updateFileName}></input>
                        <button className="btn btn-outline-primary" type="submit" id="upload-btn">Upload</button>
                        <small className="form-text text-muted" id="file-name">You selected: {this.state.filename}</small>  
                        <div id="file-uploaded-successfully"></div>          
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default UploadResume