import React,{ Components } from 'react';
import './App.css';
import Hamburger from 'react-hamburgers';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/work';
import UnderHeader from './components/UnderHeader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <div className="App-header">
          <Header></Header>
        </div><div className="Under-header">
          <UnderHeader></UnderHeader>
        </div>
        <div className="about">
          <About></About>
        </div>
        <div className="Work">
          <Work></Work>
        </div>
        <div className="contact">
          <Contact></Contact>
        </div>
        <div className="Foot">
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
