import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { toast } from "react-toastify"

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


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    toast.info("trayendo productos...")

    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(starterProducts)
      }, 2000)
    })

    pedido
      .then((resultado) => {
        toast.dismiss()
        setProducts(resultado);
      })
      .catch((error) => {
        toast.error("error al traer productos")
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])


  if (loading) {
    return <h1>Cargando...</h1>
  } else {
    return <ItemList products={products} />
  }

}

export default ItemListContainer