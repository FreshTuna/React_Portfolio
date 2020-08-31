import React, { Component } from 'react';

import MediaQuery from 'react-responsive';

class UnderHeader extends Component {
    state = { 
    }

    render(){
        return(<div className="UnderHeader">
            <MediaQuery minWidth={800}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#293448" fill-opacity="1" d="M0,0L40,10.7C80,21,160,43,240,42.7C320,43,400,21,480,16C560,11,640,21,720,53.3C800,85,880,139,960,138.7C1040,139,1120,85,1200,101.3C1280,117,1360,203,1400,245.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </MediaQuery>
        </div>);

    }

}

export default UnderHeader;