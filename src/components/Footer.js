import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';




class Footer extends Component {
    state = { }

    render() {
        const FootStyle ={
            color : "white",

        }
        const aStyle ={
            color : "white",
            "text-decoration": "none",
            
            "border-bottom": "solid 1px rgba(193,193,193)",
        }

        return(<div className="Footer">
            <p style={FootStyle}> © 2020 Designed by .<a href="#" style={aStyle}>kimhyoungjun</a> All rights reserved.</p>
        </div>);
    }
}

export default Footer;