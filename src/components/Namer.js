import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal';
import MediaQuery from 'react-responsive';

class Namer extends Component {

    state = {
        text:" ",
    }
    

    componentDidMount() {
        let possible ="-+*/|}{[]~:;?/.><=+-_)(*&^%$#@!)}";
        let title = this.props.word;
        var timeAfter = this.props.tik;
        console.log(possible.length);
        var i=0,j;
        let NameRandom = " ";
        this.timer = setTimeout(() => {
            this.timer = setInterval(() => {
                console.log("Hi");
                i++;
                console.log(title.length,i);
                NameRandom = title.substr(0,i);
                for(j=i; j<title.length; j++){
                    NameRandom+=possible.charAt(Math.floor(Math.random() * possible.length));
                }
                console.log(NameRandom);
                this.setState({text:NameRandom});
                if(i>=title.length)clearInterval(this.timer);
                NameRandom = " ";
            }, (i+1)*70);
            console.log(title.length,i);
            if(i>title.length)clearInterval(this.timer);
    }, timeAfter);
    
   }
 

    render() {

        return(   
            <div onClick={this.hand} className={this.props.classname}>{this.state.text}</div>
        );
    }
}

export default Namer;