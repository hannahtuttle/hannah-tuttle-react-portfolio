import React from 'react'
import './skills.scss'


const Skills = () => {

    return(
        <>
        <div className = "border_horizontal"></div>
        <div className = "border_v"></div>
        <div className = "border_horizontal"></div>
        <h2 className = "skills_title">Skills</h2>
        <div className ="list">
        <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Less/Sass/Material UI/Semantic UI</li>
            <li>React</li>
            <li>Redux/Context/Hooks</li>
            <li>React-Native</li>
            <li>Node/Express</li>
            <li>Python</li>
            <li>Git</li>
            <li>Terminal</li>
            <li>Sqlite/PostgreSQL</li>

        </ul>
        </div>
        </>
    )
}

export default Skills;