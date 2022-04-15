import React from 'react';
import Home from './screens/Home.js';
import Information from './screens/Information.js'
import Navigation from './screens/Navigation.js'
import Menu from './components/Menu.js';
import Footer from './components/Footer.js'


function App() {
 
  return (
    <>
    <Menu/>
    <Home/>
    <Navigation/>
    <Information/>
    <Footer/>
    </>
    );
}

export default App;