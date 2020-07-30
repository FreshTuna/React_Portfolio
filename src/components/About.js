import React, { Component } from 'react'
import HoverBtn from './Icon'
import data from '../data'
import Fade from 'react-reveal'

class About extends Component {
    state = { 
    }
    onMouseEnterHandler = () => {
        this.setState({
            hover: true
        });
        console.log('enter');
    }
    onMouseLeaveHandler = () => {
        this.setState({
            hover: false
        });
        console.log('leave');
    }

    render(){
        return(<div className="about-main">
            {data.ShowAboutImage ? <Fade left><img src={data.aboutImage} alt="about image"></img></Fade> : null}
            <Fade bottom><div className='about-content'>
                <div className="textDiv">
                    <h1>INTROD<a href="https://filmschoolrejects.com/wp-content/uploads/2019/08/itsatrap-2-1280x720.jpg">C</a>UTION</h1>
                    <h2>{data.introduction[0]}</h2>
                    <h3>{data.introduction[1]}</h3>
                    <br></br><br></br><a href="https://upload3.inven.co.kr/upload/2020/07/29/bbs/i15499684585.jpg">.</a>
                    <p>{'\u00A0'}{data.introduction[2]}</p>
                    <br></br>
                    <p>{'\u00A0'}{data.introduction[3]}</p>
                </div>
                <div className='icons'>
                    <HoverBtn imageSRC={data.pythonLogo} level={data.pythonLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.cLogo} level={data.cLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.cplusLogo} level={data.cplusLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.kerasLogo} level={data.kerasLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.javaLogo} level={data.javaLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.djangoLogo} level={data.djangoLevel}></HoverBtn>
                    <HoverBtn imageSRC={data.reactLogo} level={data.reactLevel}></HoverBtn>
            
                    
                </div>
            </div></Fade>
            
        </div>);
    }
}

export default About;