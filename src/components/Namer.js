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
        let title = data.title;
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
    }, 100);
    /*
        this.timer = setTimeout(()=>{
        for(i=0; i<title.length+1; i++){
            this.timer = setTimeout(()=>{
                NameRandom = title.substr(0,i);
                for(j=0; j<title.length; j++){
                        NameRandom+=possible.charAt(Math.floor(Math.random() * possible.length));
                        console.log(NameRandom); 
                }
            this.setState({text:NameRandom});
            NameRandom=" ";
            },500);
        }
        },1000);

    }

    
    */
   }

    handleOnClick = () => {
        console.log("Print some text");
    }
      
      

    
    changeText = (a,possible) => {
        let Name = ' '
        for( var i=a; i < 10; i++ ) {
              Name = Name + possible[i];
              this.setState({
                  text:Name,
              })
        }
        return Name;
    }

    
    

    render() {

        return(   
            <h1 onClick={this.hand} className='header-title'>{this.state.text}</h1>
        );
    }
}

export default Namer;