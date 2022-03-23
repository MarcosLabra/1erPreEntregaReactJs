import { useContext } from "react"
import { context } from "../context/CartContext"

const Cart = () => {

    const {cart,removeItem,clear, totalPrice, cartCounter} = useContext(context)

    const handleClear = () => {
        clear()
    }
    return (
        <section className="cartList">
            <h2>Carrito</h2>
            <div>
            {cart.map(item => (
                <article key={item.id} className="cartItem">
                    <img src={item.image} />
                    <h3>{item.title}</h3>
                    <p>{item.quantity} x ${item.price}</p>
                    <p>Total Parcial : ${item.quantity * item.price}</p>
                    <button className="button" onClick={() => removeItem(item.id)}>borrar</button>
                </article>
            ))}
            </div>
            {cartCounter() === 0 ? <h4>El carrito está vacio</h4> : <button className="button" onClick={() => { clear() }} >Vaciar Carrito</button>}
            {totalPrice() === 0 ? null : <h4>Precio total: ${totalPrice()}</h4>}
        </section>
    )
}

export default Cart