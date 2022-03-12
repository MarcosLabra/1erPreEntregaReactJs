import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({item}) => {
    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                <Rate allowHalf count={5} value={item.rating?.rate}/>
                <p>Rates : {item.rating?.count}</p>
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
        </article>
    )
}

export default ItemDetail