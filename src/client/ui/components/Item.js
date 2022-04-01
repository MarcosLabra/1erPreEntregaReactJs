import { Link } from "react-router-dom"

const item = ({ item }) => {
  return (
    <article key={item.id} className="productCard">
      <img src={item.imagen} alt={`foto de ${item.nombre}`} />
      <h3>{item.nombre}</h3>
      <p className="price">${item.precio}</p>
      <Link to={`/items/${item.id}`}>ver detalle</Link>
      <p>{item.categoria}</p>
    </article>
  )
}

export default item