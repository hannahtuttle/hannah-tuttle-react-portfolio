import React from 'react';
import './App.scss';
//import './nav.scss';
import {Route} from 'react-router-dom';
import Home from './components/homepage.js';
import ContactForm from './components/Contact.js';
import Projects from './components/Projects.js';



function App() {
  return (
    <div >
      {/* <h1>Hannah Tuttle</h1> */}
    <Route exact path='/' component={Home}/>
    {/* <Route exact path='/contactForm' component={ContactForm}/>
    <Route exact path = '/projects/:title' component={Projects}/> */}
    </div>
  );
}

export default App;
