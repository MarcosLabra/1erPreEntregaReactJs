import { Link } from "react-router-dom"

const item = ({item}) => {
  return (
    <article key={item.id} className="productCard">
        <img src={item.image}/>
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>
        <Link to={`/items/${item.id}`}>ver detalle</Link>
        <p>{item.category}</p>
    </article>
  )
}

export default item