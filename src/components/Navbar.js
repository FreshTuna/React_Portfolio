import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import data from '../data';
import { HamburgerArrow, HamburgerSlider } from 'react-animated-burgers'
import MediaQuery  from 'react-responsive'

class Navbar extends Component {


    state = { 
        isActivate: false,
        navbarActivate : true,
     }
    scrollToTop = () =>{
        scroll.scrollToTop();
    };
    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }
    

    componentDidMount(){
        this.timer = setInterval(() => {
            if(window.innerWidth<800){
                this.setState({navbarActivate:false});
            }
            else if(window.scrollY>770){
                if(window.scrollY>2100 && window.scrollY<3050)
                    this.setState({navbarActivate:true});
                else
                    this.setState({navbarActivate:false});
                
            }
            else{
                this.setState({navbarActivate:true});
            }
        },150)
    }
    
    render() { 
        const navStyle = {
            filter: 'brightness(0) invert(1)',
        };
        const activate=this.state.isActive;
        


        let button;
        if(activate){
            button = <li>hi</li>        
        }
        else{
            button = <li>wow</li>
        }

        return (
        <nav style={this.state.navbarActivate ? navStyle : null}>
            <ul>
                <MediaQuery maxWidth={1024}>
                <li>
                {this.state.isActive ? <li><li><Link
                    className='link'
                    activateClass="active"s
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={this.scrollToTop}
                ><img src={data.homeIcon}></img></Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about-main"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                >
                <img src={data.aboutIcon}></img></Link></li></li>


                : null}
                        
                    <HamburgerSlider className="burger" isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="black"/>
                        {this.state.isActive ? <li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="heading"
                    spy={true}
                    smooth={true}
                    offset={0}
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
                <MediaQuery minWidth={1025} >
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
                    offset={100}
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
                    offset={80}
                    duration={500}
                ><img src={data.projectIcon}></img></Link></li>
                {'\u00A0'}{'\u00A0'}
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Footer"
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