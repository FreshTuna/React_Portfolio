import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal';
import MediaQuery from 'react-responsive';
import Namer from './Namer';
import Box from './boxImage';

class Header extends Component {

    state = {

    }
    render() {
        return(<div className='header'>
                
                <a className="header-mark">.</a>
                <Namer word={data.title} tik={100} classname="header-title"></Namer>
                <MediaQuery maxWidth={800}>
                <Namer word={data.name} tik={900} classname="bottomright"></Namer>
                </MediaQuery>
                
                <MediaQuery maxWidth={800}>
                    {data.ShowAboutImage ? <img src={data.headerImage2} className="header-img" alt="about image"></img> : null}
                </MediaQuery>
                <MediaQuery minWidth={801}>
                    {data.ShowAboutImage ? <img src={data.headerImage} className="header-img"  alt="about image"></img> : null}
                </MediaQuery>
                
                <MediaQuery minWidth={801}>
                    <Namer word={data.name2} tik={800} classname="bottomright"></Namer>
                </MediaQuery>
            </div>
        
        );
    }
}

export default Header;