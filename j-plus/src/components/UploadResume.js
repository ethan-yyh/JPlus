import { React, Component } from "react"
import "./css/UploadResume.css"

class UploadResume extends Component{

    constructor(){
        super();

        this.state = {
            filename: "None",
            disabled: "disabled"
        }

        this.updateFileName = this.updateFileName.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    componentDidMount(){
        document.getElementById("upload-btn").disabled = true
    }

    updateFileName(event){

        event.preventDefault();

        var fullPath = document.getElementById("select-file-btn").value;

        console.log(fullPath)

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

    uploadFile(event){

        event.preventDefault();

        var input = document.querySelector('input[type="file"]')

        console.log("upload file called.. ")
        console.log("files: " + input.files[0])

        fetch('http://localhost:9000/uploadAPI', {
            method: 'POST',
            body: input.files[0]
        })
        .then(response => {
            console.log(response);
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
                        <br></br>
                        <div id="file-uploaded-successfully"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default UploadResume