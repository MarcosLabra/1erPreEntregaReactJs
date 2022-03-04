const item = ({id, title, price, description}) => {
  return (
    <li key={id} className="productCard">
        <div>aqui va la imagen</div>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
    </li>
  )
}

export default item