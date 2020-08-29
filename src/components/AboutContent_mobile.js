import React, { Component } from 'react';
import HoverBtn from './Icon'
import data from '../data'
import Fade from 'react-reveal/Fade'
import AboutImage from './AboutImage'

class AboutContentMobile extends Component{
    state={}
    render() {
        return(
            <div className='about-content'>
                <div className="textDiv">
                    <Fade duration={650} delay={500}><h1>INTROD<a href="https://filmschoolrejects.com/wp-content/uploads/2019/08/itsatrap-2-1280x720.jpg">C</a>UTION</h1></Fade>
                    <Fade duration={650} delay={700}><h2>{data.introduction[0]}</h2></Fade>
                    <Fade delay={840}><h3>{data.introduction[1]}</h3></Fade>
                    <br></br><br></br>
                    <Fade delay={1100}><p>{'\u00A0'}{data.introduction[2]}</p></Fade>
                    <br></br>
                    <Fade delay={1100}><p>{'\u00A0'}{data.introduction[3]}</p></Fade>
                </div>

                <div className='iconContainer'>
                    <div className='icons'>
                        <Fade bottom delay={1100}><HoverBtn imageSRC={data.pythonLogo} level={data.pythonLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1100}><HoverBtn imageSRC={data.cLogo} level={data.cLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1100}><HoverBtn imageSRC={data.cplusLogo} level={data.cplusLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1100}><HoverBtn imageSRC={data.kerasLogo} level={data.kerasLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1200}><HoverBtn imageSRC={data.javaLogo} level={data.javaLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1200}><HoverBtn imageSRC={data.djangoLogo} level={data.djangoLevel}></HoverBtn></Fade>
                        <Fade bottom delay={1200}><HoverBtn imageSRC={data.reactLogo} level={data.reactLevel}></HoverBtn></Fade>
                
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutContentMobile