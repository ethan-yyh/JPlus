import { Component, React } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './css/Register.css'

class Register extends Component{
    render(){
        return(
            <div>
                <NavBar page="register"/>
                <div className="container register-container">
                    <h1 id="register-title">Register</h1>
                    <hr className="my-4"></hr>
                    <form>
                        <div className="form-group">
                            <label for="firstname">First Name</label>
                            <input className="form-control" id="firstname" placeholder="Enter your first name"></input>
                        </div>
                        <div className="form-group">
                            <label for="lastname">Last Name</label>
                            <input className="form-control" id="lastname" placeholder="Enter your last name"></input>
                        </div>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input className="form-control" id="username" placeholder="Choose a username"></input>
                            <small className="form-text text-muted">This username will be used to login in the future.</small> 
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="username" placeholder="Choose a password"></input>
                        </div>
                        <Link to={`/login`} className="btn btn-outline-primary" id="login-btn">Login</Link>
                        <button type="submit" className="btn btn-primary" id="submit-btn" disabled>Register</button>
                        
                        
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

export default Register;