import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact_inside2 extends Component {
    state = {
        text : "Contact Me"
    }

    toggleHover= (props)=> {
        console.log("hoverman");
        this.setState({text:"Contact Me >>"});
    }
    toggleOut = (props) =>{
        console.log("outman");
        this.setState({text:"Contact Me"});
    }

    render() {
        return(
            <Fade bottom duration={650} delay={700}>
            <p className="btn-holder">
                <a href={`mailto:${data.Email}`} className='email' onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleOut}>
                    {this.state.text}
                </a>
            </p>
            <div className="icon-holder">
                <ul>
                <li>
                <a href={data.linkedIn}>   
                    <img src={data.instagramLogo}></img>
                </a>
                </li>
                <li>
                <a href={data.Site}>      
                    <img src={data.githubLogo}></img>
                </a>
                </li>
                <li>
                <a href={`mailto:${data.Email}`}>  
                    <img src={data.mailLogo}></img>
                </a>
                </li>
                </ul>
            </div>
            </Fade>
        );
    }
}

export default Contact_inside2;