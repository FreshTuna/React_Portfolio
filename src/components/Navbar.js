import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import data from '../data';
import { HamburgerArrow, HamburgerSlider } from 'react-animated-burgers'
import MediaQuery  from 'react-responsive'

class Navbar extends Component {


    state = { 
        isActivate: false
     }
    scrollToTop = () =>{
        scroll.scrollToTop();
    };
    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    
    render() { 
        const activate=this.state.isActive;


        let button;
        if(activate){
            button = <li>hi</li>        
        }
        else{
            button = <li>wow</li>
        }

        return (
        <nav>
            <ul>
                <MediaQuery maxWidth={800} >
                <li>
                    <HamburgerSlider isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="black"/>
                        {this.state.isActive ? <li><li><Link
                    className='link'
                    activateClass="active"s
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                ><img src={data.homeIcon}></img></Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about-main"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                >
                <img src={data.aboutIcon}></img></Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="heading"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                ><img src={data.projectIcon}></img></Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><img src={data.contactIcon}></img></Link></li>
                </li>
                
                
                
                
                : null}
                        
                </li>
                </MediaQuery>
                <MediaQuery minWidth={801} >
                <li><Link
                    className='link'
                    activateClass="active"s
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
                </MediaQuery>
            </ul>

            
        </nav>);
    }
}
 
export default Navbar;