import React, { Component } from 'react';
import HoverBtn from './Icon'
import data from '../data'
import Fade from 'react-reveal/Fade'
import AboutImage from './AboutImage'

class AboutContent extends Component{
    state={}
    render() {
        return(
            <div className='about-content'>
                <div className="textDiv">
                    <Fade duration={650} delay={1000}><h1>ABOUT ME</h1></Fade>
                    <Fade duration={650} delay={1400}><h2>안녕하세요 Backend Developer <span>장준영</span>입니다.</h2></Fade>
                    
                    <br></br><br></br>
                    <Fade delay={1680}><p>{'\u00A0'}{data.introduction[2]}</p></Fade>
                    <br></br>
                    <Fade delay={1680}><p>{'\u00A0'}{data.introduction[3]}</p></Fade>
                </div>

                <div className='iconContainer'>
                    <div className='icons'>
                        <Fade bottom delay={2000}><HoverBtn imageSRC={data.pythonLogo} level={data.pythonLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2100}><HoverBtn imageSRC={data.cLogo} level={data.cLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2200}><HoverBtn imageSRC={data.cplusLogo} level={data.cplusLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2300}><HoverBtn imageSRC={data.kerasLogo} level={data.kerasLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2400}><HoverBtn imageSRC={data.javaLogo} level={data.javaLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2500}><HoverBtn imageSRC={data.djangoLogo} level={data.djangoLevel}></HoverBtn></Fade>
                        <Fade bottom delay={2600}><HoverBtn imageSRC={data.reactLogo} level={data.reactLevel}></HoverBtn></Fade>
                
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContent