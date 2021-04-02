import { Component, React } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './css/Login.css'

class Login extends Component{

    constructor(){
        super()
        this.state = {
            firstname: "",
            login: false
        }

        this.userLogin = this.userLogin.bind(this)
    }
    
    async userLogin(event){

        event.preventDefault();

        var username = document.getElementById('username').value; 
        var password = document.getElementById('password').value;

        var req = {
            "username": username,
            "password": password
        }

        console.log(req)

        const response = await fetch(`http://localhost:9000/authenticationAPI`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        })

        const data = await response.json()

        console.log(data)
    }
    render(){
        if(this.state.login === true){
            return(
                <div>
                    <Redirect to={`/dashboard/${this.state.firstname}`}></Redirect>
                </div>
            );
        } else {
            return(
                <div>
                    <NavBar page="login"/>
                    <div className="container login-container">
                        <h1 id="login-title">Login</h1>
                        <hr className="my-4"></hr>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" id="username" placeholder="Enter your username"></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
                            </div>
                            <Link to={`/register`} className="btn btn-outline-primary" id="register-btn">Register</Link>
                            <button type="submit" className="btn btn-primary" id="login-btn" onClick={this.userLogin}>Login</button> 
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

export default Login;