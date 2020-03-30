import React from 'react';
import {Link} from 'react-router-dom';
import ContactForm from './Contact.js';
import ProjectGallery from './galleryProjects.js'
import Skills from './Skills.js';
import Projects from './Projects.js';
import ActivityGraph from './AcivityGraph.js'
import AboutMe from './AboutMe.js'

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
      <div><Link to='/contactForm'><h4>Contact</h4></Link></div>
      </div>
      {/* <Projects/> */}
      <ProjectGallery/>
      <Skills/>
      <ActivityGraph/>
      </div>
      </div>    )
}
export default Home;