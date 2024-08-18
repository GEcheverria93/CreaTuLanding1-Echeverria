import useCartStore from '../store/useCartStore';

function ItemDetailContainer({ product }) {
  const { addToCart } = useCartStore();
  const checkProductStock = () => {
    // Implementa la lógica para verificar el stock del producto
    return product && product.stock > 0; // Retorna true o false según el stock
  };

  const handleAddToCart = (product) => {
    if (checkProductStock(product.id)) {
      addToCart(product.id, product);
    } else {
      alert('Producto sin stock');
    }
  };
  return (
    <>
      {product && (
        <div className="product-category-card">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="product-image"
          />
          <h1 className="product-name">{product.name}</h1>
          <h2 className="product-category-name">{product.category}</h2>
          <p>Price: ${product.price}</p>
          <p>
            {product.stock > 0 ? `In Stock: ${product.stock}` : 'Out Of Stock'}
          </p>
          <button
            className="add-to-cart-btn"
            disabled={!checkProductStock(product.id)}
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
