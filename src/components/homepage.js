import React from 'react';
// import {Link} from 'react-router-dom';
// import ContactForm from './Contact.js';
import ProjectGallery from './galleryProjects.js'
import Skills from './Skills.js';
import AboutMe from './AboutMe.js'
import AboutMe2 from './AboutMe2.js'

function Home() {

    return (
    <div>
        <div className='landingPage'>
        {/* <h1>Hannah Tuttle</h1> */}
      <AboutMe/>
      <div className='navBar'>

      <div><h4>Projects</h4></div>
      {/* <div><h4>About Me</h4></div> */}
      <div><h4>Skills</h4></div>
      <div><h4>Contact</h4></div>
      </div>
      {/* <Projects/> */}
      {/* <p>________________________________________________________________________________________________</p> */}
      <ProjectGallery/>
      <Skills/>
      <AboutMe2/>
      </div>
      <footer className ='footer'>
      <p>View my work <a href='https://github.com/hannahtuttle?tab=repositories'>here</a>.</p>
        <h5>Contact</h5>
        <p>hannahtuttle28@gmail.com</p>
      </footer>
      </div>    )
}
export default Home;