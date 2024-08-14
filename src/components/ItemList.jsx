import { useNavigate } from 'react-router-dom';

import useCartStore from '../store/useCartStore';

function ItemList({ product }) {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();

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

  const goToItem = (e, id) => {
    if (e.target.className !== 'add-to-cart-btn') {
      navigate(`/item/${id}`);
    }
  };

  return (
    <article className="product" onClick={(e) => goToItem(e, product.id)}>
      <div>
        <img src={`/images/${product.image}`} alt={product.name} />
        <span className="product-title">{product.name}</span>
        <p className="product-price">${product.price}</p>
      </div>
      <button
        className="add-to-cart-btn"
        disabled={!checkProductStock(product.id)}
        onClick={() => handleAddToCart(product)}
      >
        Añadir al carrito
      </button>
    </article>
  );
}

export default ItemList;
