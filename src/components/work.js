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
                <path fill="#293448" fill-opacity="1" d="M0,32L40,42.7C80,53,160,75,240,85.3C320,96,400,96,480,101.3C560,107,640,117,720,106.7C800,96,880,64,960,90.7C1040,117,1120,203,1200,250.7C1280,299,1360,309,1400,314.7L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
        </div>);
    }
}

export default Work;