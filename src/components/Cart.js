import { useContext } from "react"
import { context } from "../context/CartContext"
import { NavLink } from "react-router-dom"
import { db } from "./firebase"
import { collection ,serverTimestamp , addDoc} from "firebase/firestore"
import { toast } from "react-toastify"


const Cart = () => {

    const { cart, removeItem, clear, totalPrice, cartCounter } = useContext(context)

    const terminarCompra = () => {
        const orden = {
            buyer: {
                nombre: "Horacio",
                telefono: "55555555",
                email: "test@gmail.com"
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice()
        }

        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)

        pedido
            .then(res => {
                console.log(res)
                toast.success("Finalizo la compra!" + "Id : " + res.id)
            })
            .catch(error => {
                toast.error("hubo un error!")
            })
        }

        return (
            <section className="cartList">
                <h2>Carrito</h2>
                <div>
                    {cart.map(item => (
                        <article key={item.id} className="cartItem">
                            <img src={item.imagen} />
                            <h3>{item.nombre}</h3>
                            <p>{item.quantity} x ${item.precio}</p>
                            <p>Total Parcial : ${item.quantity * item.precio}</p>
                            <button className="button" onClick={() => removeItem(item.id)}>borrar</button>
                        </article>
                    ))}
                </div>
                
                {cartCounter() === 0 ? <h4>El carrito está vacio</h4> : <button className="button" onClick={() => { clear() }} >Vaciar Carrito</button>}
                {cartCounter() === 0 ? <NavLink to="/" className="button">seguir comprando</NavLink> : <></>}
                <button className="button" onClick={() => {terminarCompra()}}>terminar compra</button>
                {totalPrice() === 0 ? null : <h4>Precio total: ${totalPrice()}</h4>}
            </section>
        )
    }

    export default Cart