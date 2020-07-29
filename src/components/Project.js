import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {}
    render() {
        return(
            <Fade bottom>
                <div className='project'>
                    <a href={this.props.url}>
                        <figure>
                            <img src={this.props.imageSRC}></img>
                            <figcaption><p>{this.props.readme}</p></figcaption>
                        </figure>
                    </a>
                    <h1>{this.props.title}</h1>
                    <span>{this.props.service}</span>
                </div>

            </Fade>
        );
    }
}

export default Project;