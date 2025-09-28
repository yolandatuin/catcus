import React from 'react'
import '../styles/Plants.scss';
import { HiArrowCircleUp, HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { IoIosWater } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

function Plants({filteredPlants, resetFilter}) {
const navigate = useNavigate(); //Es un hook, por lo que debes crear un componente para usarlo. No puedes usarlo directamente. 

const handleBack = () => {
  resetFilter();
  navigate(-1);
}
  
  return (
    <>
    <ul>
      {
        filteredPlants.map((plant, index ) => {
          return (
  
            <li className="card" key={index} id={plant.id}>
              <div className={'card__image' + (plant.toxicForCats ? ' toxic' : ' noToxic')}>
                <img src={plant.image} alt="" />
              </div>
              <div className="card__titles">
                <h1>{plant.name.en}</h1>
                <h2>{plant.scientificName}</h2>
              </div>
              <div className="card__description"> 
                <p>{plant.description.en}</p>
                <p><strong>Toxicity Level: </strong>{plant.toxicityLevel}</p>
                <p><strong>Symptoms: </strong>{plant.effectsOnCats.en}</p>
                <h3>How to Care</h3>
                <p><strong><IoIosWater color="blue" size="30px"/> </strong>{plant.waterLevel}</p>
                <p><strong><MdLightMode color="yellow" size="30px" /> </strong>{plant.sunLevel}</p>
                <p><strong><SiGoogleanalytics color="yellow" size="30px"/> </strong>{plant.careDifficulty}</p>
                  

              </div>
              
            </li>
          )
        })
      }
    </ul>
    <div className="plants_nav">
      <HiArrowCircleUp
      size="50px" 
      color="#ccc" 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ cursor: "pointer" }}
      />
      <HiArrowCircleLeft
      size="50px" 
      color="#ccc" 
      onClick={handleBack}
      style={{ cursor: "pointer" }}
      />
      
    </div>
</>



  )
}

export default Plants