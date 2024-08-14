function ItemDetailContainer({ product }) {
  return (
    <>
      {product && (
        <>
          <h1>{product.name}</h1>
          <h2 className="product-category-name">{product.category}</h2>
        </>
      )}
    </>
  );
}

export default ItemDetailContainer;
