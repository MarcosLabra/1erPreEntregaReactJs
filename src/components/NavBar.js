import React from 'react'

import CartWidget from "./CartWidget"

const Header = () => {
    return (
        <header>
            <h1>Corina Piercer</h1>
            <nav>
                <ul>
                    <li><a href='#'>categorias</a></li>
                    <li><a href='#'>carrito</a></li>
                    <li><CartWidget/></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header