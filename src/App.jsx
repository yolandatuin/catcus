import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Plants from './components/Plants';
import data from './assets/data/plants.json'
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {


  const plants = data;

  return (
    <div> 
        <Header />

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/plants" element={<Plants plants={plants}/>}/>
        </Routes>  
        
        <Footer/>
      
    </div>
  );
}

export default App;
