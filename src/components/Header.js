import React, { Component } from 'react'
import data from '../data'
import Fade from 'react-reveal'

class Header extends Component {
    state = {

    }
    render() {
        return(<div className='header'>
                <Fade right><h1 className='header-title'>{data.title}</h1></Fade>
                {data.ShowAboutImage ? <img src={data.headerImage} alt="about image"></img> : null}
                <Fade right><div className='bottomright'>"  {data.name}  "</div></Fade>
            </div>
        );
    }
}

export default Header;