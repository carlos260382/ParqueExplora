import React from 'react';
import Home from './screens/Home.js';
import Information from './screens/Information.js'
import Navigation from './screens/Navigation.js'
import Menu from './components/Menu.js';
import Footer from './components/Footer.js'
import Form from './components/Form.js'


function App() {
 
  return (
    <>
    <Menu/>

    <Form/>
          
    <Home/>
    <Navigation/>
    <Information/>
    <Footer/>
    </>
    );
}

export default App;