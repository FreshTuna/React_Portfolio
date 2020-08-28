import React, { Component } from 'react'
import data from '../data'
import Fade from 'react-reveal'
class AboutImage extends Component {

  

    render() {
        return(
            <Fade left delay={100}><img src={data.aboutImage} alt="about image"></img></Fade>
        );
    }
}

export default AboutImage;