import NavBar from "./NavBar"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const Header = () => {

  return (
    <header>
      <div>
        <NavLink to={"/"}><h1>Mi Tienda</h1></NavLink>
        <NavLink to="/cart"><CartWidget /></NavLink>
      </div>
      <NavBar />
    </header>
  )
}

export default Header