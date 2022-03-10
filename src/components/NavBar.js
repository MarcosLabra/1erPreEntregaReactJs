import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href='#'>categorias</a></li>
                <li><a href='#'>carrito</a></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
        
    )
}

export default NavBar