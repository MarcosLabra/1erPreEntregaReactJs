import { useContext } from 'react'
import { context } from '../context/CartContext'


const CartWidget = () => {

  const {cartCounter, totalPrice} = useContext(context)

  return (
    <div>
      <span className="material-icons">
        shopping_cart
      </span>
      {cartCounter()}
      <p>${totalPrice()}</p>
    </div>

  )
}

export default CartWidget