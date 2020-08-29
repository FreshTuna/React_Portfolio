import React, { Component } from 'react';
import HoverBtn from './Icon';
import data from '../data';
import Fade from 'react-reveal/Fade';
import AboutImage from './AboutImage';
import AboutContent from './AboutContent';
import AboutContentMobile from './AboutContent_mobile';
import MediaQuery from 'react-responsive';

class About extends Component {
    state = { 
    }

    render(){
        return(<div className="about-main">
            <AboutImage></AboutImage>
            <MediaQuery minWidth={1024}><AboutContent></AboutContent></MediaQuery>
            <MediaQuery maxWidth={1024}><AboutContentMobile></AboutContentMobile></MediaQuery>
        </div>);
    }
}

export default About;