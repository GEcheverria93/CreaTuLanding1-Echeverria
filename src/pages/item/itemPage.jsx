import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetailsContainer } from '../../containers';
import './itemStyle.css';
import { productsData } from '../../data/products';

const ItemPage = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.id === Number(itemId)
    );
    setProduct(foundProduct);
  }, [itemId]);
  return (
    <div className="item-page-container">
      {product ? (
        <ItemDetailsContainer product={product} />
      ) : (
        <div className="product-not-found">Product Not Found</div>
      )}
    </div>
  );
};

export default ItemPage;
