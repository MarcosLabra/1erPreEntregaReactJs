import { useContext } from 'react'
import { context } from '../context/CartContext'


const CartWidget = () => {

  const { cartCounter } = useContext(context)

  return (
    <div>
      <span className="material-icons">
        shopping_cart
      </span>
      {cartCounter() === 0 ? <></> : cartCounter()}
    </div>

  )
}

export default CartWidget