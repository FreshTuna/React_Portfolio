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

        const InfoStyle ={
            "text-align": "center",
            width: "100%",
            margin: "0 auto",
            "font-weight": "600",
            
        }
        return(
        <div>
            <Fade bottom duration={400} delay={730}>

            <div className="information">
                <p style={InfoStyle}>Email: {data.Email}</p>
                <p style={InfoStyle}>{data.Cellphone}</p>
            </div>
            <p className="btn-holder">
                <a href={`mailto:${data.Email}`} style={this.state.hoverActivate ? EmailStyle: null} className='email' onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleOut}>
                    {this.state.text}
                </a>
            </p>
            </Fade>
            <Fade delay={750}>
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
                <a href={data.linkedIn}>   
                    <img src={data.linkedInLogo}></img>
                </a>
                </li>
                </ul>
            </div>
            </Fade>
        </div>
        );
    }
}

export default Contact_inside2;