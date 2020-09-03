import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import { findAllByDisplayValue } from '@testing-library/react';

class Contact_inside2 extends Component {
    state = {
        text : "Contact Me",
        hoverActivate : false,
    }

    toggleHover= (props)=> {
        console.log("hoverman");
        this.setState({hoverActivate:!this.state.hoverActivate});
        
    }
    toggleOut = (props) =>{
        console.log("outman");
        this.setState({hoverActivate:!this.state.hoverActivate});
    }

    render() {

        const EmailStyle ={
            background: "#293448",
            transition: "all .6s",
            color: "white",
            transform: "scale(1.3)",
        }
        return(
            <Fade duration={650} delay={700}>
            <p className="btn-holder">
                <a href={`mailto:${data.Email}`} style={this.state.hoverActivate ? EmailStyle: null} className='email' onMouseEnter={this.toggleHover}
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