import '../styles/Header.scss';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Header({searchPlant, setSearchPlant}) {
    const navigate = useNavigate();

  const handleClickSubmit = (event) => {
    setSearchPlant(event.target.value)
    navigate("/plants");
  }

  return (
    <header>
      <div className="header_top">
        <Link to="/" className="h1_link"><h1>Catcus</h1></Link>
        <img src="/cat.svg" alt="Header image of the website" />
        <h2>Discover if a plant is toxic for your cats</h2>
        <form className="search" action="">
          <input 
          className="search-field"
          autoComplete="off"
          type="search"
          name="search"
          placeholder="Is this plant toxic?"
          value={searchPlant}
          onChange={handleClickSubmit}/>
          
          <input className="button-search" type="submit" />
        </form>
      </div>
      <div className="header_wave"></div>
    </header>
  )
}

export default Header