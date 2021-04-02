import { Component, React } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './css/Register.css'

class Register extends Component{

    constructor(){
        super()
        this.state = {
            firstname: "",
            usernameExist: true,
            redirect: false
        }
        this.checkUsername = this.checkUsername.bind(this)
    }

    async checkUsername(event){

        event.preventDefault();
        var username = document.getElementById('username').value


        // false -> user does not exist in database
        // true -> user exists in the database, ask for a new username
        const response = await fetch(`http://localhost:9000/checkUsernameAPI?username=${username}`)
        const data = await response.json()
        
        this.setState({
            usernameExist: data["userNameExist"]
        });

        // username not available

        if(this.state.usernameExist === true){
            console.log('username invalid');
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
                firstname: firstname,
                redirect: true
            });
        }

        

    }

    render(){

        if(this.state.redirect === true){
            return(
                <div>
                    <Redirect to={`/dashboard/${this.state.firstname}`}></Redirect>
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
                                <input className="form-control" id="firstname" placeholder="Enter your first name"></input>
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input className="form-control" id="lastname" placeholder="Enter your last name"></input>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" id="username" placeholder="Choose a username"></input>
                                <small className="form-text text-muted">This username will be used to login in the future.</small> 
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Choose a password"></input>
                            </div>
                            <Link to={`/login`} className="btn btn-outline-primary" id="login-btn">Login</Link>
                            <button type="submit" className="btn btn-primary" id="submit-btn" onClick={this.checkUsername}>Register</button>
                            
                            
                        </form>
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