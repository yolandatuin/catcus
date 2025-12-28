import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Plants from './components/Plants';
import { useState, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState("");
  const [favs, setFavs] = useState([]);


  // Cargar JSON desde public/data/plants.json
  useEffect(() => {
    fetch("data/plants.json")
      .then((result) => result.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error cargando plants.json:", error));
  }, []);

  const filteredPlants = plants.filter(plant => plant.name.en.toLowerCase().includes(searchPlant.toLowerCase()));


  return (
    <div> 
        <Header searchPlant={searchPlant} setSearchPlant={setSearchPlant} />

        <Routes>
          <Route path="/" element={<Main favs={favs} plants={plants} filteredPlants={filteredPlants}/>}/>
          <Route path="/plants" element={<Plants setFavs={setFavs} favs={favs} filteredPlants={filteredPlants} resetFilter={() => setSearchPlant("")}/>}/>
        </Routes>  
        
        <Footer/>
      
    </div>
  );
}

export default App;
