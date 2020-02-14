import React from 'react'
import photo from '../assets/ProfileImage.png'


const AboutMe = () => {

    return (
        <div>
        <img src={photo} alt='profile photo' />
        <h4>Hannah Tuttle</h4>
        <p>Full Stack Web Developer with a passion for problem solving and continuous learning.</p> 

        {/* <p>I have extensive training and experience coding in React on the front-end and Node/express on the backend. My latest project has been in React-native, which I taught myself. In all of my previous work places I have risen to leadership positions. experience has been in leadership and managment. I have gained experience working in all size teams and know the importance of good communication. I love being in field that requires constant learning and self motivation.</p> */}

        <footer>
            <p>View my work <a href='https://github.com/hannahtuttle?tab=repositories'>here</a>.</p>
            <h5>Contact</h5>
            <p>hannahtuttle28@gmail.com</p>
        </footer>
        </div>
    )
}

export default AboutMe;