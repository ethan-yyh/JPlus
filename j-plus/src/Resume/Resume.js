import { React, Component } from 'react';
import NavBar from '../Home/NavBar.js';
import NewDocument from './NewDocument.js';

class Resume extends Component{
    render(){
        return(
            <div>
                <NavBar page="resume"/>
                <NewDocument/>
            </div>

        );
    }
}

export default Resume