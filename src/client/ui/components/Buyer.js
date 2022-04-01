import { useState } from "react"
import { db } from "../../api/firebase"
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useContext } from "react"
import { context } from "../../api/providers/CartContext"

const Buyer = () => {
  const [buyer, setBuyer] = useState({ nombre: '', telefono: '', email: '' })

  const { cart, totalPrice, clear } = useContext(context)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value
    })
  }
  const endPurchase = () => {
    const orden = {
      buyer,
      items: cart,
      date: serverTimestamp(),
      total: totalPrice()
    }

    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection, orden)

    pedido
      .then(res => {
        toast.success("Finalizo la compra!" + "Id : " + res.id)
      })
      .catch(error => {
        toast.error("hubo un error!")
      })
      .finally(() => {
        clear()
      })
  }
  return (
    <div>
      <form style={{ fontSize: '1.5rem' }}>
        <input value={buyer.nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleChange} />
        <input value={buyer.telefono} name="telefono" type="number" placeholder="Telefono" onChange={handleChange} />
        <input value={buyer.email} name="email" type="email" placeholder="Email" onChange={handleChange} />

      </form>
      <h4>Precio total: ${totalPrice()}</h4>
      <button className="button" onClick={() => { clear() }} >Vaciar Carrito</button>
      <button className="button" onClick={() => endPurchase()}>Finalizar compra</button>
    </div>
  )
}
export default Buyer