import React from 'react'

const Projects = () => {


    return (
        <>
        <h3>Projects</h3>
        <div>
        <a href='https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe'>RecipeShare</a>
        <p> On this project my main focus was working on the front end. This project has a react-native front end a node/express backend. I worked with a team of other web developers and a UX designer. My contribution to the project included setting up the navigation for the app, the login and sign up page. I pair programmed on the create Recipe form and the Edit a recipe form. On those form i added the styling and functionality for the buttons. On the Edit form I set up the form to pre-populate with the state from the selected recipe. I was responsible for the componet that displays the individual recipes. I set up and published our project on expo. I styled the create recipe form, the edit form, the individual recipe display, the login and sign-up to match the UX design.</p>
       </div>
       <div>
           <a href='https://github.com/watermyplants/FrontEnd'> Water my plants</a>
           <p> I worked with a team of developers and a UX designer. This project has a react front-end and a node/express backend. I worked on the login form and the adding a plant form. i was responsible for setting of the logic on the front end to sent the backend dates for a watering schedule. I was also responsible for styling the app according to the design from our UX designer.</p>
       </div>
       <div>
           <a href='https://github.com/guidr-project/GUIDR-Backend'>GUIDR</a>
           <p> I worked with one other node developer to set up the backend and host it on heroku. This prject has a react-front-end and a node/express back-end. I worked on setting the backend with postgresql, set up all the end points, middleware and sql query functions. </p>
       </div>
        </>
    )
}

export default Projects;