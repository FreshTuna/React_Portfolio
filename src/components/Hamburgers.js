import React from 'react';
import Hamburger from 'react-hamburgers';

class Hamburgers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    return (
      <div>
        <Hamburger
          active={this.state.active}
          type="slider"
          onClick={() => this.setState({ active: !this.state.active })}
        ></Hamburger>
      </div>
    );
  }
}

export default Hamburgers