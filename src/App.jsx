import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Plants from './components/Plants';
import { useState } from 'react';
import data from './assets/data/plants.json'
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  const plants = data;
  const [searchPlant, setSearchPlant] = useState("");

  const filteredPlants = plants.filter(plant => plant.name.en.toLowerCase().includes(searchPlant.toLowerCase()));


  return (
    <div> 
        <Header searchPlant={searchPlant} setSearchPlant={setSearchPlant} />

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/plants" element={<Plants filteredPlants={filteredPlants} resetFilter={() => setSearchPlant("")}/>}/>
        </Routes>  
        
        <Footer/>
      
    </div>
  );
}

export default App;
