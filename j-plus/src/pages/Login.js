/**
 * This class renders the Login page
 */
import { Component, React } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/Login.css'

class Login extends Component{

    constructor(){
        super()
        this.state = {
            data: "", // response returned from backend
            username: "", // keep track of username input by user
            password:"", // keep track of password input by user
            firstname:"", // get firstname from database if password is valid
            login: false // goes to dashboard if login is true
        }

        // bind methods
        this.userLogin = this.userLogin.bind(this)
        this.handleResponse = this.handleResponse.bind(this)
        this.updateState = this.updateState.bind(this);
    }

    // disable login button 
    componentDidMount(){
        document.getElementById('login-btn').disabled = true;
    }

    // user has clicked the login button
    userLogin(event){

        event.preventDefault()

        console.log("clicked")

        var req = {
            "username": this.state.username,
            "password": this.state.password
        }

        // make authentication request
        fetch(`http://localhost:9000/authenticationAPI`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })
        .then(response => response.json())
        .then(data => {
            this.setState({data: data});
            this.handleResponse()
        })


        
    }


    // handle response from backend
    handleResponse(){


        if(this.state.data["pass"] === true){
            
            this.setState({
                firstname: this.state.data["firstname"],
                login: true
            });

            console.log("directing to dashboard")

        } else {

            // wrong password
            // clear input
            // focus username field
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";
            document.getElementById('username').focus();
            document.getElementById('login-btn').disabled = true;

            // clear stored state
            this.setState({
                username: "",
                password: ""
            });

            // render warning
            document.getElementById('password-warning').innerHTML = 
            `
            <div class="alert alert-danger">
            <strong>Warning:</strong> The password you just entered do not match our record, please check again. If you have not registered, please register first.
            </div>
            `
        }
    }

    updateState(event){
        event.preventDefault();

        console.log("updating state")

        // get info from DOM
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        // update state
        this.setState({
            username: username,
            password: password
        });


        // enable login button if fileds are filled
        if (this.state.username !== "" && this.state.password !== ""){
            console.log("enabling login button");
            document.getElementById('login-btn').disabled = false
            
        } else {
            document.getElementById('login-btn').disabled = true
        }

    }

    render(){
        if(this.state.login === true){ // authentication successful, directing to dashboard
            return(
                <div>
                    <Redirect to={`/dashboard/${this.state.username}/${this.state.firstname}`}></Redirect>
                </div>
            );
        } else { // still on login page
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                            <div className="collapse navbar-collapse" id="navbarColor03">
            
                                <ul className="navbar-nav mr-auto"></ul>
                                <Link to={`/register`} className="btn btn-outline-primary" id="nav-btn">Register</Link>
                                
                            </div>
                        </nav>
                    </div>

                    <div className="container login-container">
                        <h1 id="login-title">Login</h1>
                        <hr className="my-4"></hr>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" id="username" placeholder="Enter your username" onChange={this.updateState}></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={this.updateState}></input>
                            </div>
                            
                            <button type="submit" className="btn btn-primary" id="login-btn" onClick={this.userLogin}>Login</button> 
                        </form>
                        <div id="password-warning"></div>
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

export default Login;