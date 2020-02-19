import React from 'react';
import './App.css';
import './nav.scss';
import {Route, Link} from 'react-router-dom';
import Home from './components/homepage.js';
import ContactForm from './components/Contact.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import ActivityGraph from './components/AcivityGraph.js'
import AboutMe from './components/AboutMe.js'


function App() {
  return (
    <div >
      {/* <h1>Hannah Tuttle</h1> */}
    <Route exact path='/' component={Home}/>
    <Route exact path='/contactForm' component={ContactForm}/>
    {/* <Projects/>
    <Skills/>
    <ActivityGraph/> */}
    </div>
  );
}

export default App;
