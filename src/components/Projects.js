import React from 'react'
import '../App.css'


// const Projects = () => {


//     return (
//         <>
//         <h3 className='project-title'>Projects</h3>
        
//         <div className='projects'>
//         <div className='flexing'>

//         <div className='pro-description'>
//         <h4>RecipeShare</h4>
//             <p>This app is created for users who are interested in cooking and like to experiment with recipes. It allows users to edit all recipes and and see the all versions of that recipe.</p>
//             <p>Buit using react-native front end and a node/express backend.</p>
//         <p>You can find the repository <a href='https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe'>here</a>.</p>
//         </div>
//         <ul className='bullet-points'>
//             <li>setting up the navigation for the app</li>
//             <li>the login and sign up page</li>
//             <li>I pair programmed on the create Recipe form and the Edit a recipe form. On those form i added the styling and functionality for the buttons.</li>
//             <li> On the Edit form I set up the form to pre-populate with the state from the selected recipe</li>
//             <li>I was responsible for the componet that displays the individual recipes</li>
//            <li>I set up and published our project on expo.</li>
//            <li>I styled the create recipe form, the edit form, the individual recipe display, the login and sign-up to match the UX design.</li>
//         </ul>
//        </div>
//         </div>
//        <div className='projects'>
//            <div className='pro-description'>
//            <h4>Water my plants</h4>
//            <p>This website is for people who need to set up a calendar for when to water their plants. </p>
//             <p>Built using a react front-end and a node/express backend.</p>
//             <p>You can veiw the project <a href='https://water-my-plant.netlify.com/login'>here </a> or veiw the repsoitoty <a href='https://github.com/watermyplants/FrontEnd'>here</a>.</p>
//             </div>
//             <ul className='bullet-points'>
//                <li>login form and the adding a plant form.</li> 
//                <li>i was responsible for setting of the logic on the front end to sent the backend dates for a watering schedule.</li>
//                <li>styling the app according to the design from our UX designer.</li>
//             </ul>
//        </div>
          
//        <div className='projects'>
//            <div className='pro-description'>
//            <h3>GUIDR</h3>
//            <p>This app is for outddor guides to save their trips and allow others to vie the trips that they have guided.</p>
//            <p>Built with a react-front-end and a node/express back-end.</p>
//            <p>You can view the website  <a href='https://guider-app.madisonmckown.now.sh/homepage'>here</a> or checkout the repository <a href='https://github.com/guidr-project/GUIDR-Backend'>here</a>.</p>
//            </div>
//            <ul className='bullet-points'>
//                <li>I worked on setting the backend with postgresql</li>
//                <li>set up all the end points, middleware and sql query functions</li>
//            </ul>
//        </div>
       
//         </>
//     )
// }

// export default Projects;

const projectsObject = {
    'recipeShare': {
        title: 'recipeShare',
        descripion: 'This app is created for users who are interested in cooking and like to experiment with recipes. It allows users to edit all recipes and and see the all versions of that recipe.',
        stack: 'Buit using react-native front end and a node/express backend.',
        gitHublink: 'https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe',
        hosted: '',
        tasks: ['Setting up the navigation for the app', 'The login and sign up page', 'I pair programmed on the create Recipe form and the Edit a recipe form. On those form I added the styling and functionality for the buttons.', 'I was responsible for the component that displays the individual recipes', 'I set up and published our project on expo.', 'I styled the create recipe form, the edit form, the individual recipe display, the login and sign-up to match the UX design.']
    },
    'Water my plants': {
        title: 'Water my plants',
        descripion: 'This website is for people who need to set up a calendar for when to water their plants.',
        stack: 'Built using a react front-end and a node/express backend.',
        gitHublink: 'https://github.com/watermyplants/FrontEnd',
        hosted: 'https://water-my-plant.netlify.com/login',
        tasks: ['login form and the adding a plant form.', 'I was responsible for working with the backend to send the dates in the correct format.', 'Styling the app according to the design from our UX designer.']
    },
    'GUIDR': {
        title: 'GUIDR',
        descripion: 'This app is for outddor guides to save their trips and allow others to vie the trips that they have guided.',
        stack: 'Built with a react-front-end and a node/express back-end.',
        gitHublink: 'https://github.com/guidr-project/GUIDR-Backend',
        hosted: 'https://guider-app.madisonmckown.now.sh/homepage',
        tasks: ['I worked on setting the backend with postgresql and Node/express.', 'Set up all the end points, middleware and sql query functions.']
}
}

export default projectsObject;