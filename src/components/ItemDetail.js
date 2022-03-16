import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import ItemCount from './ItemCount';
import { NavLink } from "react-router-dom"
import { useState } from "react";

const ItemDetail = ({item}) => {

    const [cantCart, setCantCart] = useState(0)

    const onAdd = (itemCant) => {
        if((cantCart + itemCant) <= 5){
        setCantCart(cantCart + itemCant)
        }else{
            alert("solo hay 5 elementos de este producto")
        }

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