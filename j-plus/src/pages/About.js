import { React, Component } from 'react';
import NavBar from '../components/NavBar';
import './css/About.css'

class About extends Component{

    render(){
        var description = "J+ (read as J plus) is a web application developed by three students at Wilfrid Laurier University. The main goal of J+ is to simplify the job search process by automating the tedious search work and recommending related jobs according to the skills that users have on their resumes. Users can upload their resume after logging in and add additional constraints, such as preferred locations, before submitting a search request. The application will extract keywords (skills) from the user's resumes, and combine them with the constraints (user preferences) to find a list of recommended jobs from reliable resources (e.g. Indeed)."

        return(
            <div>
                <NavBar page="about"></NavBar>
                <div className="container">
                    <h1 id="greeting-lg">About J+</h1>
                    <hr className="my-4"></hr>
                    <p>{description}</p>
                    <h1 id="greeting">Contributors</h1>
                    <hr className="my-4"></hr>

                    <div className="card" id="contributor-card">
                        <div className="card-body">
                            <h4 className="card-title">Ethan Yao</h4>
                            <p className="card-text">5th year BBA/BSc student at Wilfrild Laurier University</p>
                            <a href="https://github.com/ethan-yyh" target="_blank"className="card-link">Github</a>
                            <a href="https://www.linkedin.com/in/yiheng-ethan-yao-728a63162/" target="_blank" className="card-link">Linkedin</a>
                        </div>
                    </div>
                    <div className="card" id="contributor-card">
                        <div className="card-body">
                            <h4 className="card-title">Leo Zhan</h4>
                            <p className="card-text">5th year BBA/BSc student at Wilfrild Laurier University</p>
                            <a href="https://github.com/leozhan101" target="_blank" className="card-link">Github</a>
                            <a href="https://www.linkedin.com/in/leo-zhan/" target="_blank" className="card-link">Linkedin</a>
                            
                        </div>
                    </div>
                    <div className="card" id="contributor-card">
                        <div className="card-body">
                            <h4 className="card-title">Wayne Wang</h4>
                            <p className="card-text">5th year BBA/BSc student at Wilfrild Laurier University</p>
                            <a href="https://github.com/zyWangWayne" target="_blank" className="card-link">Github</a>
                            <a href="https://www.linkedin.com/in/ziyao-wang-wang1682laurier/" target="_blank" className="card-link">Linkedin</a>
                        </div>
                    </div>

                    <hr className="my-4"></hr>
                </div>
                
                <div className="copyright">
                <p id="copyright-blk" className="lead">J+ Copyrighted</p>
                </div>
                
            </div>
        );


    }
}

export default About;