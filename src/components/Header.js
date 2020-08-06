import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal';
import MediaQuery from 'react-responsive';
import Namer from './Namer';
import Icon from './BoxSVG';
class Header extends Component {

    state = {

    }
    render() {
        return(<div className='header'>
                <a className="header-mark">.</a>
                <Namer word={data.title} tik={100} classname="header-title"></Namer>
                <MediaQuery maxWidth={800}>
                    {data.ShowAboutImage ? <img src={data.headerImage2} alt="about image"></img> : null}
                </MediaQuery>
                <MediaQuery minWidth={801}>
                    {data.ShowAboutImage ? <img src={data.headerImage} alt="about image"></img> : null}
                </MediaQuery>
                <MediaQuery maxWidth={800}>
                    <Namer word={data.name} tik={900} classname="bottomright"></Namer>
                </MediaQuery>
                <MediaQuery minWidth={801}>
                    <div className='bottomright'>"  {data.name}  "</div>
                </MediaQuery>
            </div>
        
        );
    }
}

export default Header;