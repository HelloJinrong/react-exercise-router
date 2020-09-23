import React from 'react';
import {Link} from "react-router-dom";
import '../styles/About.css'

class About extends React.Component{
    render() {
        return <div className='about'>
            <div className='content1'>
                <p>Company: ThoughtWorks Local</p>
                <p>Location: ShenZheng</p>
            </div>
            <div className='content2'>
                <p>For more information, please view our
                <Link to='/'>website</Link></p>
            </div>
        </div>
    }
}

export default About;
