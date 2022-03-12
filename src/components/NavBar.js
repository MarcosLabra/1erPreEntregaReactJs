import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/category/electronics">electronics</NavLink>
            <NavLink to="/category/jewelery"> jewelery</NavLink>
            <NavLink to="/category/men's clothing">men's clothing</NavLink>
            <NavLink to="/category/women's clothing">women's clothing</NavLink>
        </nav>
        
    )
}

export default NavBar