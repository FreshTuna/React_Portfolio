import React, { Component } from 'react'
import data from '../data'

class Header extends Component {
    state = {

    }
    render() {
        return(<div className='header'>
                <h1 className='header-title'>{data.title}</h1>
                {data.ShowAboutImage ? <img src={data.headerImage} alt="about image"></img> : null}
                <div className='bottomright'>"  {data.name}  "</div>
            </div>
        );
    }
}

export default Header;