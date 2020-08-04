import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal';
import MediaQuery from 'react-responsive';
import Namer from './Namer'
class Header extends Component {

    state = {

    }
    render() {
        return(<div className='header'>
                <Namer></Namer>
                <MediaQuery maxWidth={800}>
                    {data.ShowAboutImage ? <img src={data.headerImage2} alt="about image"></img> : null}
                </MediaQuery>
                <MediaQuery minWidth={801}>
                    {data.ShowAboutImage ? <img src={data.headerImage} alt="about image"></img> : null}
                </MediaQuery>
                <div className='bottomright'>"  {data.name}  "</div>
            </div>
        );
    }
}

export default Header;