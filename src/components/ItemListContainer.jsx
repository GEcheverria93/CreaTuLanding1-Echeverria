import { useState, useEffect } from 'react';

import { productsData } from '../data/products';
import useCartStore from '../store/useCartStore';

const ItemListContainer = ({ productListTitle }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCartStore();

  useEffect(() => {
    // Simula la carga de datos de productos
    setProducts(productsData);
  }, []);

  const checkProductStock = (productId) => {
    // Implementa la lógica para verificar el stock del producto
    const product = products.find((product) => product.id === productId);
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
      <h2>{productListTitle}</h2>
      <div id="products-container">
        {products.map((product) => (
          <article key={product.id} className="product">
            <div>
              <img src={`./images/${product.image}`} alt={product.name} />
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
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
