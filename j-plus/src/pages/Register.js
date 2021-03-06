/**
 * This class renders the Register page 
 */

import { Component, React } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/Register.css'

class Register extends Component{

    constructor(){
        super()
        this.state = {
            firstname: "", // keep track of users firstname
            lastname: "", // keep track of users lastname
            username: "", // keep track of users username
            password: "", // keep track of users password
            usernameExist: true,
            redirect: false
        }

        // bind methods
        this.updateState = this.updateState.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
    }

    // disable register button
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
            document.getElementById('submit-btn').disabled = true;

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
            .then(response => 
                {   
                    console.log(response);
                    // render warning
                    document.getElementById('username-warning').innerHTML = 
                    `
                    <div class="alert alert-success">
                    <strong>Registered Successfully!</strong> You will be transferred to dashboard shortly.
                    </div>
                    `
                });

            // go to next page after 5 seconds
            setTimeout(()=>{
                this.setState({
                    username: username,
                    firstname: firstname,
                    redirect: true
                });
            }, 4000);

            
        }
    }

    // update state as user types
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
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to={'/'}className="navbar-brand" href="localhost:3000/" id="logo">J+</Link>
                            <div className="collapse navbar-collapse" id="navbarColor03">
            
                                <ul className="navbar-nav mr-auto"></ul>
                                <Link to={`/login`} className="btn btn-outline-primary" id="nav-btn">login</Link>
                                
                            </div>
                        </nav>
                    </div>


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