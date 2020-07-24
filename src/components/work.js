import React, { Component } from 'react'
import Fade from 'react-reveal'
import data from '../data'
import Project from './Project'

class Work extends Component {
    state = { }
    render() {
        return(<div className='work'>
            <h1 className='heading'><Fade bottom cascade>WORK</Fade></h1>
            <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project    key={project.id}
                                title={project.title}
                                imageSRC={project.imageSrc}
                                service={project.service}
                                url={project.url}>
                    </Project>
                ))}
            </div>
        </div>);
    }
}

export default Work;