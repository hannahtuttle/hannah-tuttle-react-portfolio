import React from 'react'
// import photo from '../assets/ProfileImage.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '../App.scss';


const AboutMe = () => {

    return (
        <div className='top'>
        <div className='intro'>
        <h1>Hannah Tuttle</h1>
        <p className = 'short-intro'>Full Stack Web Developer with a passion for problem solving and continuous learning.</p> 
        <ArrowDownwardIcon style= {{border: '1px solid white', borderRadius:"50%", marginTop: '12%', height: '5%'}}/>
        </div>
        </div>
    
    )
}

export default AboutMe;