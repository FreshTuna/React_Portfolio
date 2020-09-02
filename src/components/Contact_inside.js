import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact_inside extends Component {
    state = {}
    render() {
        return(
            <Fade bottom duration={650} delay={700}>
            <div>
                <div className='Gmail'>
                        <a href={`mailto:${data.Email}`} className='email'>
                            
                            <p><img src={data.mailLogo}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Email}</p>
                        </a>
                    </div>
                    <div className='instagram'>
                        <a href={data.linkedIn} className='email'>
                            
                            <p><img src={data.instagramLogo}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Instagram}</p>
                        </a>
                    </div>
                    <div className='site'>
                        <a href={data.Site} className='email'>
                            
                            <span><img src={data.githubLogo}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Site}</span>
                        </a>
                </div>
            </div>
            </Fade>
        );
    }
}

export default Contact_inside;