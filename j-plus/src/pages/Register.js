import { Component, React } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './css/Register.css'

class Register extends Component{

    constructor(){
        super()
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            usernameExist: true,
            redirect: false
        }
        this.updateState = this.updateState.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
    }

    componentDidMount(){
        document.getElementById('submit-btn').disabled = true;
    }

    async checkUsername(event){

        event.preventDefault();
        var username = document.getElementById('username').value


        // false -> user does not exist in database
        // true -> user exists in the database, ask for a new username
        var data = await fetch(`http://localhost:9000/checkUsernameAPI?username=${username}`).then(response => response.json())
        
        data = await fetch(`http://localhost:9000/checkUsernameAPI?username=${username}`).then(response => response.json())
        
        this.setState({
            usernameExist: data["userNameExist"]
        });

        // username not available
        if(this.state.usernameExist === true){
            console.log('username invalid');

            // invalid username
            // clear input
            // focus username field
            document.getElementById('username').value = "";
            document.getElementById('username').focus();
            document.getElementById('login-btn').disabled = true;

            // clear stored state
            this.setState({
                username: ""
            });

            // render warning
            document.getElementById('username-warning').innerHTML = 
            `
            <div class="alert alert-danger">
            <strong>Warning:</strong> This username has already been taken, pick another one.
            </div>
            `

            // remove warning after 15 seconds
            setTimeout(()=>{
                document.getElementById('username-warning').innerHTML = ""
            }, 15000);


        } else if (this.state.usernameExist === false){ // username is available
            console.log('username is valid');

            var firstname = document.getElementById('firstname').value
            var lastname = document.getElementById('lastname').value
            var password = document.getElementById('password').value

            var req = {
                "firstname": firstname,
                "lastname": lastname,
                "username": username,
                "password": password
            }

            fetch('http://localhost:9000/registerAPI', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            })
            .then(response => response.json())
            .then(data => console.log(data)); 

            this.setState({
                username: username,
                firstname: firstname,
                redirect: true
            });
        }

        

    }

    updateState(event){
        event.preventDefault()

        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        this.setState({
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password
        });

        if (this.state.firstname !== "" && this.state.lastname !== "" && this.state.username !== "" && this.state.password !== ""){
            document.getElementById('submit-btn').disabled = false;
        } else {
            document.getElementById('submit-btn').disabled = true;
        }


    }

    render(){

        if(this.state.redirect === true){
            return(
                <div>
                    <Redirect to={`/dashboard/${this.state.username}/${this.state.firstname}`}></Redirect>
                </div>
            );
        } else {
            return(
                <div>
                    <NavBar page="register"/>
                    <div className="container register-container">
                        <h1 id="register-title">Register</h1>
                        <hr className="my-4"></hr>
                        <form>
                            <div className="form-group">
                                <label>First Name</label>
                                <input className="form-control" id="firstname" placeholder="Enter your first name" onChange={this.updateState}></input>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" id="lastname" placeholder="Enter your last name" onChange={this.updateState}></input>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" id="username" placeholder="Choose a username" onChange={this.updateState}></input>
                                <small className="form-text text-muted">This username will be used to login in the future.</small> 
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Choose a password" onChange={this.updateState}></input>
                            </div>
                            <Link to={`/login`} className="btn btn-outline-primary" id="login-btn">Login</Link>
                            <button type="submit" className="btn btn-primary" id="submit-btn" onClick={this.checkUsername}>Register</button>
                        </form>
                        <div id="username-warning"></div>
                        <hr className="my-4"></hr>
                        
                        
                    </div>
                    <div className="copyright">
                        <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                    </div>
                </div>
            );
        }
    }
}

export default Register;