import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import Home from './Paginas/Home/Home';
import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
       
    </>
  );
}

export default App;
