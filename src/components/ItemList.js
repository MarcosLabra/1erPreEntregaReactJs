import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map(({id, title, price, description}) => {
        return <Item id={id} title={title} price={price} description={description}/>;
      })}
    </ul>
  );
};

export default ItemList;
