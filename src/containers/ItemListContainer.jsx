import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemList } from '../components';
import { productsData } from '../data/products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const filteredProducts = productsData.filter(
      (product) => product.category === category
    );
    setProducts(filteredProducts);
  }, [category]);

  useEffect(() => {
    if (!category) setProducts(productsData);
  }, [category]);

  return (
    <>
      <h2>Lista de productos</h2>
      <div id="products-container">
        {products.map((product) => (
          <ItemList key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
