const item = ({product}) => {
  return (
    <article key={product.id} className="productCard">
        <div>aqui va la imagen</div>
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
    </article>
  )
}

export default item