import React, { Component } from 'react'
import data from '../data'
import Fade from 'react-reveal/Fade'
class AboutImage extends Component {

  

    render() {
        return(
            <Fade left duration={740} delay={40}><img src={data.aboutImage} alt="about image"></img></Fade>
        );
    }
}

export default AboutImage;