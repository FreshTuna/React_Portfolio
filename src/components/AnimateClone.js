import React, { Component } from 'react'

class Animate extends Component {

  

    render() {
        const Styleclass = {
            visibility: 'visible',
            opacity: 1,
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            transition: 'opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.5s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.5s'
        }
        return(
            <h1 className={this.classname} style={Styleclass}>
                whats up
            </h1>
        );
    }
    
}

export default Animate;