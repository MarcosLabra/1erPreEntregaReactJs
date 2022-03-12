import NavBar from "./NavBar"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <NavLink to={"/"}><h1>Mi Tienda</h1></NavLink>
        <NavLink to="/cart"><CartWidget/></NavLink>
        <NavBar/>
    </header>
  )
}

export default Header