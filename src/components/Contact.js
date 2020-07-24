import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    state = {}
    render() {
        return(<div className='Contact' >
            <h1>CONTACT</h1>
            <div className='contact-content'>
                <div className='Gmail'>
                    <a href={`mailto:${data.Email}`} className='email'>
                        
                        <p><img src={data.circleIcon1}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Email}</p>
                    </a>
                </div>
                <div className='instagram'>
                    <a href={`mailto:${data.Instragram}`} className='email'>
                        
                        <p><img src={data.circleIcon1}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Instagram}</p>
                    </a>
                </div>
                <div className='site'>
                    <a href={`mailto:${data.Site}`} className='email'>
                        
                        <p><img src={data.circleIcon1}></img>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{data.Site}</p>
                    </a>
                </div>
            </div>
        </div>);
    }
}

export default Contact;