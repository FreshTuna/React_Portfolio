import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import Contact_inside from './Contact_inside';
import Contact_inside2 from './Contact_inside_v2';

class Contact extends Component {
    state = {}
    render() {
        return(<Fade duration={650} delay={300}><div className='Contact'>
            <h1>CONTACT</h1>
            <div className='contact-content'>
                <Contact_inside2></Contact_inside2>
            </div>
        </div></Fade>);
    }
}

export default Contact;