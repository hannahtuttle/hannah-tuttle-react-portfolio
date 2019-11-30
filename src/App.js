import React from 'react';
import './App.css';
import ContactForm from './components/Contact.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import ActivityGraph from './components/AcivityGraph.js'
import AboutMe from './components/AboutMe.js'


function App() {
  return (
    <div className='landingPage'>
      <h1>Hannah Tuttle</h1>
    <div><h4>Projects</h4></div>
    <div><h4>About Me</h4></div>
    <div><h4>Skills</h4></div>
    <div><h4>Contact</h4></div>
    {/* <ContactForm/> */}
    {/* <Skills/> */}
    {/* <Projects/> */}
    {/* <ActivityGraph/> */}
    <AboutMe/>
    </div>
  );
}

export default App;
