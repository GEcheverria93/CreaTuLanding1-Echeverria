import { useState, useEffect } from 'react';

import { productsData } from '../data/products';

const ItemListContainer = ({ productListTitle }) => {
  const [products, setProducts] = useState([]);
  console.log(productListTitle);
  useEffect(() => {
    // Simula la carga de datos de productos
    setProducts(productsData);
  }, []);

  const checkProductStock = (productId) => {
    // Implementa la lógica para verificar el stock del producto
    return true; // Retorna true o false según el stock
  };

  const setupProductsEvents = () => {
    // Implementa la lógica para configurar los eventos de los productos
  };

  useEffect(() => {
    setupProductsEvents();
  }, [products]);

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
              data-product-id={product.id}
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
