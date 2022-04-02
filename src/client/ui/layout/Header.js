import NavBar from "../components/NavBar"
import CartWidget from "../components/CartWidget"
import { NavLink } from "react-router-dom"


const Header = () => {

  return (
    <>
    <header>
      <div>
        <NavLink to={"/"}><h1>Corina Piercer</h1></NavLink>
        <NavLink to="/cart"><CartWidget /></NavLink>
      </div>
      <NavBar />
    </header>
    
    </>
  )
}

export default Header