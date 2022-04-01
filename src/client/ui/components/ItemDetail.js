import ItemCount from './ItemCount';
import { NavLink } from "react-router-dom"
import { useState, useContext } from "react";

import { context } from '../../api/providers/CartContext';


const ItemDetail = ({ item }) => {

    const [cantCart, setCantCart] = useState(0)
    const { addItem } = useContext(context)

    const onAdd = (quantity) => {
        setCantCart(cantCart + quantity)
        addItem(item, quantity)
    }

    return (
        <article className="itemDetail">
            <img src={item.imagen} alt="" />
            <div className="titulos">
                <h3>{item.nombre}</h3>
                <p>${item.precio}</p>
                <p>material:{item.material}</p>
                <div>
                    <p>In Cart: {cantCart}</p>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
                {cantCart ? <NavLink to="/cart" className='button'>terminar compra</NavLink> : <></>}
            </div>
            <p className="descripcion">no hay descripcion</p>
        </article>
    )
}

export default ItemDetail