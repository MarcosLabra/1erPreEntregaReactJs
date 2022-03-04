import { useEffect, useState } from "react"
import ItemList from "./ItemList"

let starterProducts = [
  {
      id: 1,
      title: "Producto 1",
      description: "descripcion 1",
      price: 100,
      pictureUrl: "foto 1"
  },
  {
      id: 2,
      title: "Producto 2",
      description: "descripcion 2",
      price: 200,
      pictureUrl: "foto 2"
  },
  {
      id: 3,
      title: "Producto 3",
      description: "descripcion 3",
      price: 300,
      pictureUrl: "foto 3"
  }
]


const Main = ({nombre}) => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
      console.log("Ejecutando useEffect")

      const pedido = new Promise((res,rej)=>{
          setTimeout(()=>{
              res(starterProducts)
          },2000)
      })

      pedido
      .then((resultado)=>{
          console.log("Estuvo bien");
          setproducts(resultado);
      })
      .catch((error)=>{
          console.log("Estuvo mal");
      })

  },[])

  return (
    <main>
        <h2>Bienvenido <span>{nombre}</span>!</h2>
        <ItemList products={products}/>
    </main>
  )
}

export default Main