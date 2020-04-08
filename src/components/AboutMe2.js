import React from 'react'
import photo from '../assets/ProfileImage.png';
import '../styles/AboutMe2.scss'




const AboutMe2 = () => {


return(
    <div className='fonts'>
    <div className = "border_horizontal"></div>
        <div className = "border_v"></div>
        <div className = "border_horizontal"></div>
    <h2 className = 'about_title'>About Me</h2>
    <div className ='about_c'>
    <img className='image' src={photo} alt='Hannah Tuttle' />
    
    <p className = 'description'>I’m a wife, a mother of twin toddlers, and an avid puzzle doer. My love of problem solving has led me to a career in web development. I’ve found that coding has both fulfills my desire to always be learning and provides a great sense of accomplishment when completing projects with team members. As a full stack developer, I have training and experience in Javascript and Python for both front and back end. Interested in collaborating? Let’s get coffee (or maybe zoom during this coronavirus season) and see how I can help. </p> 
    </div>
    </div>
)
}

export default AboutMe2;