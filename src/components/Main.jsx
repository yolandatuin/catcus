import '../styles/Main.scss';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";




function Main({favs, plants}) {


  return (
    <main>
        
        <h2>Most common plants</h2>
            <ul className="main__ul_common">
                
                    <li className="main__common ficus-lyrata">
                        <HashLink  className="all-clickable" smooth to="/plants#fiddle-leaf-fig">
                            <p>Fiddle Leaf Fig</p>
                        </HashLink>
                    </li>
                
                
                    <li className="main__common rubber-plant">
                        <HashLink  className="all-clickable" smooth to="/plants#rubber-plant">
                            <p>Rubber Plant</p>
                        </HashLink>
                    </li>
                
                    <li className="main__common sterlitizia">
                        <HashLink  className="all-clickable" smooth to="/plants#bird-of-paradise">
                            <p>Bird of Paradise</p>
                        </HashLink>
                    </li>
                
                
                    <li className="main__common pothos">
                        <HashLink  className="all-clickable" smooth to="/plants#pothos">
                            <p>Pothos</p>
                        </HashLink>
                    </li>
                
                
                    <li className="main__common monstera-deliciosa"> 
                        <HashLink  className="all-clickable" smooth to="/plants#swiss-cheese-plant">
                        <p>Monstera Deliciosa</p>   
                        </HashLink>
                    </li>
                
                
            </ul>
        <h2>Favorite plants</h2>
        <ul className="main__ul_favs">
            {favs.length === 0 ? 
            (plants
            .slice(0,5)
            .map((plant,index) => (
                <li key={index} className={`main__recent ${plant.name.en.toLowerCase().replace(/ /g, "-")}`}>
                    <HashLink  className="all-clickable" smooth to={`/plants#${plant.name.en.toLowerCase().replace(/ /g, "-")}`}>
                    <h3>{plant.name.en}</h3>
                    <ul>
                        <li>Difficulty: {plant.careDifficulty}</li>
                        <li>Light: {plant.sunLevel}</li>
                        <li>Water: {plant.waterLevel}</li>
                    </ul>
                    </HashLink>
                </li>
            ))
            ) : (
            
            plants
            .filter(plant => favs.includes(plant.scientificName))
            .slice(0,5)
            .map((plant,index) => (
                <li key={index} className={`main__recent ${plant.name.en.toLowerCase().replace(/ /g, "-")}`}>
                    <HashLink  className="all-clickable" smooth to={`/plants#${plant.name.en.toLowerCase().replace(/ /g, "-")}`}>
                    <h3>{plant.name.en}</h3>
                    <ul>
                        <li>Difficulty: {plant.careDifficulty}</li>
                        <li>Light: {plant.sunLevel}</li>
                        <li>Water: {plant.waterLevel}</li>
                    </ul>
                    </HashLink>
                </li>
            ))
            )}
            
        </ul>
        <h2>Other plants</h2>
        <ul className="main__other">
            <HashLink smooth to="/plants#pothus"><li>Pothus</li></HashLink>
            <HashLink smooth to="/plants#pilea-peperomioides"><li>Pilea Peperomioides</li></HashLink>
            <HashLink smooth to="/plants#kalanchoe"><li>Kalanchoe</li></HashLink>
            <HashLink smooth to="/plants#sunflower"><li>Sunflower</li></HashLink>
            <HashLink smooth to="/plants#begonia"><li>Begonia</li></HashLink>
            <HashLink smooth to="/plants#rose"><li>Rose</li></HashLink>
            <HashLink smooth to="/plants#geranium"><li>Geranium</li></HashLink>
            <HashLink smooth to="/plants#snake-plant"><li>Snake Plant</li></HashLink>
            <HashLink smooth to="/plants#calathea"><li>Calathea</li></HashLink>
        </ul>
        <div className="main__other-more"><HashLink smooth to="/plants">More</HashLink></div>
    </main>
  )
}

export default Main