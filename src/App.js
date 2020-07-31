import React,{ Components } from 'react';
import './App.css';
import Hamburger from 'react-hamburgers';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/work';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="App-header">
          <Header></Header>
        </div><div className="about">
          <About></About>
        </div>
        <div className="Work">
          <Work></Work>
        </div>
        <div className="contact">
          <Contact></Contact>
        </div>
    </div>
  );
}

export default App;
