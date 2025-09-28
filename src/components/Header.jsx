import '../styles/Header.scss';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="header_top">
        <Link to="/" className="h1_link"><h1>Catcus</h1></Link>
        <h2>Discover if a plant is toxic for your cats</h2>
        <form action="">
          <input type="text" placeholder="Is this plant toxic for my cats?"/>
          <input type="submit" />
        </form>
      </div>
      <div className="header_wave"></div>
    </header>
  )
}

export default Header