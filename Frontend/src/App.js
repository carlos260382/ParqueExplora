import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home.js';
import Information from './screens/Information.js'
import Navigation from './screens/Navigation.js'
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import updateExperienceApi from './screens/updateExperienceApi.js';




function App() {
 
  return (
    <BrowserRouter>
    <Route path="/" component={Menu}></Route>
    <Route path="/" component={Home} exact></Route>
    <Route path="/navigation" component={Navigation} exact></Route>
    <Route path="/information" component={Information} exact></Route>
    <Route path="/addexperience" component={updateExperienceApi} exact></Route>
    <Route path="/" component={Footer}></Route>
    </BrowserRouter>
    );
}

export default App;