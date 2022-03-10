const itemDetail = ({ product }) => {
  return (
    <article key={product.id} class="itemDetail">
        <div class="imagen">aqui va la imagen</div>
        <div class="titulos">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
        <p class="descripcion">{product.description}</p>
    </article>
  )
}

export default itemDetail