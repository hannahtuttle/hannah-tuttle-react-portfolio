import React, {useState} from 'react';
import { Link, Element} from 'react-scroll'
// import {Link} from 'react-router-dom';
import ContactForm from './Contact.js';
import ProjectGallery from './galleryProjects.js'
import Skills from './Skills.js';
import AboutMe from './AboutMe.js'
import AboutMe2 from './AboutMe2.js'

function Home() {

  const [mouseOn, setMouseOn] = useState(false)

  const onMouseDown = () => {
    setMouseOn(true)
  }

  const onMouseLeave = () => {
    setMouseOn(false)
  }
  

    return (
    <div>
        <div className='landingPage'>
        {/* <h1>Hannah Tuttle</h1> */}
      <AboutMe/>
      <div className='navBar'>

      <div onMouseEnter = {onMouseDown} onMouseLeave = {onMouseLeave}><Link activeClass="active" className="projects-1" to="projects-1" spy={true} smooth={true} duration={500} >{mouseOn ? <h4 style={{'color': '#404040'}} className = 'fonts'>Projects</h4>:<h4 className = 'fonts'>Projects</h4>}</Link></div>
      {/* <div><h4>About Me</h4></div> */}
      <div><Link activeClass="active" className="skills-1" to="skills-1" spy={true} smooth={true} duration={500} ><h4 className = 'fonts'>Skills</h4></Link></div>
      <div><Link activeClass="active" className="about-1" to="about-1" spy={true} smooth={true} duration={500} ><h4 className = 'fonts'>About Me</h4></Link></div>
      {/* <div><h4 className = 'fonts'>Contact</h4></div> */}
      </div>
      {/* <Projects/> */}
      {/* <p>________________________________________________________________________________________________</p> */}
      <Element name="projects-1" className="element" ><ProjectGallery/></Element>
      <Element name="skills-1" className="element" ><Skills/></Element>
      <Element name="about-1" className="element" ><AboutMe2/></Element>
      </div>
      <footer className ='footer'>
      <p>View my work on <a href='https://github.com/hannahtuttle?tab=repositories'>Github</a>.</p>
        <h5>Contact</h5>
        <a href = 'mailto:tuttleportfolio2020@gmail.com'>Email Me</a>
       {/* <p>tuttleportfolio2020@gmail.com</p> */}
      </footer>
      </div>    )
}
export default Home;