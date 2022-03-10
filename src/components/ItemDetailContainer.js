import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"

let Producto =
{
    id: 1,
    title: "Producto 1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sequi aut dolores maiores corrupti esse illo perferendis, vitae quibusdam quis blanditiis eaque porro iste eligendi excepturi. Eum beatae vel ea?",
    price: 100,
    pictureUrl: "foto 1"
}


const ItemDetailContainer = () => {

    const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        toast.info("trayendo detalles...")

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(Producto)
            }, 2000)
        })

        pedido
            .then((resultado) => {
                toast.dismiss()
                setproduct(resultado);
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
        return (
            <>
                <ItemDetail product={product} />
            </>
        )
    }
}

export default ItemDetailContainer