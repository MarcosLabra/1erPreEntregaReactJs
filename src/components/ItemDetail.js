import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import ItemCount from './ItemCount';
import { NavLink } from "react-router-dom"
import { useState, useContext } from "react";

import CartContext, { context } from '../context/CartContext';


const ItemDetail = ({item}) => {

    const [cantCart, setCantCart] = useState(0)
    const { addItem } = useContext(context)

    const onAdd = (quantity) => {
        setCantCart(cantCart + quantity)
        addItem(item, quantity)
    }

    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                <Rate allowHalf count={5} value={item.rating?.rate}/>
                <p>Rates : {item.rating?.count}</p>
                <p>In Cart: {cantCart}</p>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                <NavLink to="/cart" className='button'>terminar compra</NavLink>
            </div>
            <p className="descripcion">{item.description}</p>
        </article>
    )
}

export default ItemDetail