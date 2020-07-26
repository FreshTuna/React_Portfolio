import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import data from '../data';

class Navbar extends Component {
    state = {  }
    scrollToTop = () =>{
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>
            <ul>
                <li><Link
                    className='link'
                    activateClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                ><img src={data.homeIcon}></img></Link></li>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about-main"
                    spy={true}
                    smooth={true}
                    offset={70}
                    duration={500}
                >
                <img src={data.aboutIcon}></img>
                </Link></li>
                {'\u00A0'}{'\u00A0'}{'\u00A0'}
                <li><Link
                    className='link'
                    activeClass="active"
                    to="heading"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                ><img src={data.projectIcon}></img></Link></li>
                {'\u00A0'}{'\u00A0'}
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><img src={data.contactIcon}></img></Link></li>
            </ul>
            
        </nav>);
    }
}
 
export default Navbar;