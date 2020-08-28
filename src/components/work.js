import React, { Component } from 'react'
import Fade from 'react-reveal'
import data from '../data'
import Project from './Project'

class Work extends Component {
    state = { }
    render() {
        return(<div className='work'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#293448" fill-opacity="1" d="M0,96L40,90.7C80,85,160,75,240,106.7C320,139,400,213,480,224C560,235,640,181,720,181.3C800,181,880,235,960,261.3C1040,288,1120,288,1200,293.3C1280,299,1360,309,1400,314.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            <h1 className='heading'><Fade bottom cascade delay={500}>WORKS</Fade></h1>
            <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project    key={project.id}
                                title={project.title}
                                imageSRC={project.imageSrc}
                                service={project.service}
                                url={project.url}
                                readme={project.readme}>
                    </Project>
                ))}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#293448" fill-opacity="1" d="M0,0L60,37.3C120,75,240,149,360,170.7C480,192,600,160,720,122.7C840,85,960,43,1080,74.7C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>);
    }
}

export default Work;