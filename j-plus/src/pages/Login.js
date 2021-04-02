import { Component, React } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './css/Login.css'

class Login extends Component{
    render(){
        return(
            <div>
                <NavBar page="login"/>
                <div className="container login-container">
                    <h1 id="login-title">Login</h1>
                    <hr className="my-4"></hr>
                    <form>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input className="form-control" id="username" placeholder="Enter your username"></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
                        </div>
                        <Link to={`/register`} className="btn btn-outline-primary" id="register-btn">Register</Link>
                        <button type="submit" className="btn btn-primary" id="login-btn" disabled>Login</button> 
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

export default Login;