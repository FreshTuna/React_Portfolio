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

                <h1>INTRODCUTION</h1>
                <h2>{data.introduction[0]}</h2>
                <h3>{data.introduction[1]}</h3>
                <br></br><br></br>
                <p>{'\u00A0'}{data.introduction[2]}</p>
                <br></br>
                <p>{'\u00A0'}{data.introduction[3]}</p>
                <div className='icons'>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    <HoverBtn imageSRC={data.circleIcon1}></HoverBtn>
                    
                </div>
            </div></Fade>
            
        </div>);
    }
}

export default About;