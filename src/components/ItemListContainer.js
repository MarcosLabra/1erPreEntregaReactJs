import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const {categoryId} = useParams()
  
  useEffect(() => {
      const url = `https://fakestoreapi.com/products${categoryId ? "/category/"+categoryId : ""}`
      console.log(url)

      fetch(url) 
      .then((response)=>{
          return response.json()
      })
      .then((resultado)=>{
          setItems(resultado)
      })
      .catch(()=>{
          toast.error("Error al cargar los productos")
      })
      .finally(()=>{
          setLoading(false)
      })

  },[categoryId])


  if (loading) {
    return <h4>Cargando...</h4>
  } else {
    return <ItemList items={items} />
  }

}

export default ItemListContainer