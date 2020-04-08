// import React from 'react'
// import Navigation from './navbar.js';

const projectsObject = {
    'recipeShare': {
        title: 'recipeShare',
        description: 'recipeShare is an app created for people who like to experiment with recipes. The app allows users to edit all recipes and see all versions of any given recipe. Think Github, but for recipes.',
        stack: 'Built using React Native front end and a Node/Express back end.',
        gitHublink: 'https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe',
        hosted: '',
        tasks: ['Setting up the navigation for the app', 'Login and Sign-up page', 'Pair programmed on the "Create Recipe" form and the "Edit Recipe" form.', 'I was responsible for the component that displays the individual recipes', 'Set up and published our project on Expo.', 'Styled the "Create Recipe" form, the "Edit Recipe" form, the individual recipe display, the login and sign-up to match the UX design.']
    },
    'Water my Plants': {
        title: 'Water my Plants',
        description: 'Water my Plants is a website which provides plant-lovers a calendar for watering their plants.',
        stack: 'Built using a React front end and a Node/Express back end.',
        gitHublink: 'https://github.com/watermyplants/FrontEnd',
        hosted: 'https://water-my-plant.netlify.com/login',
        tasks: ['Login form and the "Add a plant" form.', 'Working with the back end to send the dates in the correct format.', 'Styling the app according to the design from our UX designer.']
    },
    'GUIDR': {
        title: 'GUIDR',
        description: 'GUIDR is an app for outdoor guides to save their trips and allow others to view the trips that they have guided.',
        stack: 'Built with a React front end and a Node/Express with Knex on the back end.',
        gitHublink: 'https://github.com/guidr-project/GUIDR-Backend',
        hosted: 'https://guider-app.madisonmckown.now.sh/homepage',
        tasks: ['Setting the backend with PostgreSQL and Node/Express.', 'Set up all the end points, middleware and SQL query functions.']
}
}

// const Projects = (props) => {

//     let title = props.location.title
//     return (
//         <>
//                 <Navigation/>
//                 <h1>{title}</h1>
//                 <p>{projectsObject[title].description}</p> 
//                 <p>{projectsObject[title].stack}</p>
//                 <p>{projectsObject[title].hosted}</p>
//                 <p>{projectsObject[title].gitHublink}</p>
//                 <ul>
//                     {projectsObject[title].tasks.map(task => {
//                     return <li>{task}</li>
//                     })}
//                 </ul>
       
//         </>
//     )
// }

// export default Projects;


export default projectsObject;