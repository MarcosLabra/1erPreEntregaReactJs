import { useContext } from "react"
import { context } from "../context/CartContext"
import { NavLink } from "react-router-dom"
import Buy from "./Buy"


const Cart = () => {

    const { cart, removeItem,cartCounter } = useContext(context)

    return (
        <section className="cartList">
            <h2>Carrito</h2>
            <div>
                {cart.map(item => (
                    <article key={item.id} className="cartItem">
                        <img src={item.imagen} alt={`foto de ${item.nombre}`}/>
                        <h3>{item.nombre}</h3>
                        <p>{item.quantity} x ${item.precio}</p>
                        <p>Total Parcial : ${item.quantity * item.precio}</p>
                        <button className="button" onClick={() => removeItem(item.id)}>borrar</button>
                    </article>
                ))}
            </div>
            {cartCounter() === 0 ? <h4>El carrito está vacio</h4> : <Buy />}
            {cartCounter() === 0 ? <NavLink to="/" className="button">seguir comprando</NavLink> : <></>}
        </section>
    )
}

export default Cart