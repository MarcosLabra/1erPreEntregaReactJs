import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {itemId} = useParams()
  const [rateActual, setRateActual] = useState(0)

  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then((response)=>{
        return response.json()
    })
    .then((respuesta)=>{
      setItem(respuesta)
    })
    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[])

  if(loading){
    return <h4>Cargando...</h4>
  }else{
    return (
      <ItemDetail item={item}/>
    )
  }
}

export default ItemDetailContainer