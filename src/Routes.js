// Configure a router in this file:
// Use the following components as routes:
// ./src/components/Home/Home.js
// ./src/components/About/About.js
// Use the following combinations of paths and components for your routes:
// Path: "/" - Component: Home - This path should be exact.
// Path: "/about" - Component: About.

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
// Import the ClassList component to use as a route.
import ClassList from './components/ClassList/ClassList.js';
import Student from './components/Student/Student.js';

 
export default (
    <Switch>
        <Route component = { Home } exact path = '/' />
        <Route component = { About } path = '/about' />
        <Route component={ ClassList } path="/classlist/:class" />
        <Route path="/student/:id" component={Student} />
    </Switch>
)

// Create a ClassList route with the following properties:
// Path: /classlist/:class - Component: ClassList.


// import Contact from './Contact';
// import History from './History';
// import Routes from './Routes';
// import Student from './Student';
// import 'main.css';


