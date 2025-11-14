import '../styles/Main.scss';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";



function Main() {
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
                
                
                    <li className="main__common lavanda">
                        <HashLink  className="all-clickable" smooth to="/plants#lavender">
                            <p>Lavender</p>
                        </HashLink>
                    </li>
                
                
                    <li className="main__common monstera-deliciosa"> 
                        <HashLink  className="all-clickable" smooth to="/plants#swiss-cheese-plant">
                        <p>Monstera Deliciosa</p>   
                        </HashLink>
                    </li>
                
                
            </ul>
        <h2>Most recent search</h2>
        <ul className="main__ul_recent-search">
            <li className="main__recent aloe-vera">
                    <HashLink  className="all-clickable" smooth to="/plants#aloe-vera">
                    <h3>Aloe Vera</h3>
                    <ul className="main__recent_description">
                        <li className="recent">Dificultad: Media</li>
                        <li>Luz: Media</li>
                        <li>Agua: Media</li>
                    </ul>
                </HashLink>

            </li>
            <li className="main__recent areca-palm">
                <HashLink  className="all-clickable" smooth to="/plants#areca-palm">
                <h3>Areca Palm</h3>
                <ul className="main__recent_description">
                    <li>Dificultad: Fácil</li>
                    <li>Luz: Media</li>
                    <li>Agua: Media</li>
                </ul>
                </HashLink>
            </li>
            <li className="main__recent ficus-lyrata">
                <HashLink  className="all-clickable" smooth to="/plants#fiddle-leaf-fig">
                <h3>Ficus Lyrata</h3>
                <ul className="main__recent_description">
                    <li>Dificultad: Media</li>
                    <li>Luz: Media</li>
                    <li>Agua: Media</li>
                </ul>
                </HashLink>
            </li>
            <li className="main__recent spider-plant">
                <HashLink  className="all-clickable" smooth to="/plants#spider-plant">
                <h3>Spider Plant</h3>
                <ul className="main__recent_description">
                    <li>Dificultad: Media</li>
                    <li>Luz: Media</li>
                    <li>Agua: Media</li> 
                </ul>
                </HashLink>
            </li>
            <li className="main__recent peace-lily">
                <HashLink  className="all-clickable" smooth to="/plants#peace-lily">
                <h3>Peace Lily</h3>
                <ul className="main__recent_description">
                    <li>Dificultad: Media</li>
                    <li>Luz: Media</li>
                    <li>Agua: Media</li>
                </ul>
                </HashLink>
            </li>
            <li className="main__recent pothus">
                <HashLink  className="all-clickable" smooth to="/plants#pothus">
                <h3>Pothus</h3>
                <ul className="main__recent_description">
                    <li>Dificultad: Media</li>
                    <li>Luz: Media</li>
                    <li>Agua: Media</li>
                </ul>
                </HashLink>
            </li>
        </ul>
        <h2>Otras plantas</h2>
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