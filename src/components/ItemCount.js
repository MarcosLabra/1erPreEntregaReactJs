import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [estado, setEstado] = useState(initial)

    const sumar = () => {
        if(estado < stock){
            setEstado(estado + 1);
        }else{
        alert("no hay stock")
        }
    }

    const restar = () => {
        if(estado > initial){
        setEstado(estado - 1);
        }
    }

    return (
        <div className="card">
            <h3>Producto</h3>
            <div>
                <button onClick={restar}>-</button>
                <p>{estado}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount