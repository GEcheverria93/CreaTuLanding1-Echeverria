import useCartStore from '../../store/useCartStore';

const CartPage = () => {
  const { cart, isCartOpen, toggleCart, addToCart, removeFromCart, clearCart } =
    useCartStore();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <button onClick={toggleCart}>
        {isCartOpen ? 'Cerrar Carrito' : 'Abrir Carrito'}
      </button>
      <div className="" id="">
        <ul className="" id="cart-list">
          {cart.map((cartProduct) => (
            <li key={cartProduct.id}>
              <article className="cart-product">
                <img
                  src={`./images/${cartProduct.image}`}
                  alt={cartProduct.name}
                  className="cart-product-img"
                />
                <span className="product-title">
                  <strong>{cartProduct.count}</strong> x {cartProduct.name}
                </span>
                <p className="product-price">${cartProduct.price}</p>
                <div className="cart-product-actions">
                  <button
                    className="btn-add"
                    onClick={() => addToCart(cartProduct.id, cartProduct)}
                  >
                    +
                  </button>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(cartProduct.id)}
                  >
                    -
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <div>
            <div className="total-price">
              Total:{' '}
              <strong>
                $
                {cart.reduce(
                  (total, item) => total + item.price * item.count,
                  0
                )}
              </strong>
            </div>
            <button
              className="btn-buy"
              onClick={() => {
                alert(
                  `Has realizado una compra con un valor de $${cart.reduce((total, item) => total + item.price * item.count, 0)}, ¡Felicitaciones!`
                );
                clearCart();
              }}
            >
              Comprar
            </button>
            <button className="btn-clear" onClick={clearCart}>
              Limpiar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
