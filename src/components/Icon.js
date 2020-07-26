import React, { Component } from 'react';
import data from '../data'
class HoverBtn extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  render() {
  return (
      <div className="hover-div">
        <div className="hover-btn"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        > 
        <a href = "#" className = "caption">
          <span class = "text"><h1>Basic</h1></span>
          <img src = {this.props.imageSRC}></img>
        </a>

        </div>
      </div>
    );
  }
}

export default HoverBtn;