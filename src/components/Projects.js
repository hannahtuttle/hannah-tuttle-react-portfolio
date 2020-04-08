// import React from 'react'
// import Navigation from './navbar.js';

const projectsObject = {
    'recipeShare': {
        title: 'recipeShare',
        description: 'This app is created for users who are interested in cooking and like to experiment with recipes. It allows users to edit all recipes and and see the all versions of that recipe.',
        stack: 'Buit using react-native front end and a node/express backend.',
        gitHublink: 'https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe',
        hosted: '',
        tasks: ['Setting up the navigation for the app', 'Login and Sign up page', 'Pair programmed on the create Recipe form and the Edit a recipe form.', 'I was responsible for the component that displays the individual recipes', 'Set up and published our project on expo.', 'Styled the create recipe form, the edit form, the individual recipe display, the login and sign-up to match the UX design.']
    },
    'Water my Plants': {
        title: 'Water my Plants',
        description: 'This website is for people who need to set up a calendar for when to water their plants.',
        stack: 'Built using a react front-end and a node/express backend.',
        gitHublink: 'https://github.com/watermyplants/FrontEnd',
        hosted: 'https://water-my-plant.netlify.com/login',
        tasks: ['Login form and the adding a plant form.', 'Working with the backend to send the dates in the correct format.', 'Styling the app according to the design from our UX designer.']
    },
    'GUIDR': {
        title: 'GUIDR',
        description: 'This app is for outddor guides to save their trips and allow others to vie the trips that they have guided.',
        stack: 'Built with a react-front-end and a node/express back-end.',
        gitHublink: 'https://github.com/guidr-project/GUIDR-Backend',
        hosted: 'https://guider-app.madisonmckown.now.sh/homepage',
        tasks: ['Setting the backend with postgresql and Node/express.', 'Set up all the end points, middleware and sql query functions.']
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