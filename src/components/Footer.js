import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';




class Footer extends Component {
    state = { }

    render() {
        const FootStyle ={
            color : "white",

        }

        return(<div className="Footer">
            <p style={FootStyle}> © 2020 Designed by . All rights reserved.</p>
        </div>);
    }
}

export default Footer;