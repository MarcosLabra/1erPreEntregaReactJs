import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <section className="itemList">
      {products.map((product) => {
        return <Item key={product.id} product={product}/>;
      })}
    </section>
  );
};

export default ItemList;
