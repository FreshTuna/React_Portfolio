import React, { Component } from 'react'
import data from '../data'
import Project from './Project'

class Box extends Component {
    state = {
        h:0
     }


    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ h:height });
        console.log("height: ",height)
    }

    render() {
        return(<div className="boxImage" ref={ (divElement) => { this.divElement = divElement } }>
                
            </div>);
    }
}

export default Box;