import React, { Component } from 'react'
import data from '../data'

class About extends Component {
    state = {  }
    render(){
        return(<div className="about">
            {data.ShowAboutImage ? <img src={data.aboutImage} alt="about image"></img> : null}
            <div className='about-content'>

                <h1>INTRODCUTION</h1>
                <h2>{data.introduction[0]}</h2>
                <p>{data.introduction[1]}</p>
                <br></br><br></br><br></br>
                <p>{data.introduction[2]}</p>
                <div className='icons'>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    <img src={data.circleIcon1}></img>
                    
                </div>
            </div>
            
        </div>);
    }
}

export default About;