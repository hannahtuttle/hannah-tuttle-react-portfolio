import React from 'react'
import photo from '../assets/ProfileImage.png';
import './AboutMe2.scss'




const AboutMe2 = () => {


return(
    <>
    <div className = "border_horizontal"></div>
        <div className = "border_v"></div>
        <div className = "border_horizontal"></div>
    <h2 className = 'about_title'>About Me</h2>
    <div className ='about_c'>
    <img className='image' src={photo} alt='Hannah Tuttle' />
    
    <p className = 'description'>I have training and experience coding in React on the front-end and Node/express on the backend. One of my more extensive projects was in React-native, which I taught myself. In all of my previous work places I have risen to leadership positions. experience has been in leadership and managment. I have gained experience working in all size teams and know the importance of good communication. I love being in field that requires constant learning and self motivation.</p> 
    </div>
    </>
)
}

export default AboutMe2;