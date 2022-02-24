import ItemCount from "./ItemCount"

const Main = ({nombre}) => {
  return (
    <main>
        <h2>Bienvenido <span>{nombre}</span>!</h2>
        <ItemCount stock={5} initial={1} onAdd={()=> alert("se agrego la cantidad elegida del producto al carrito")}/>
    </main>
  )
}

export default Main