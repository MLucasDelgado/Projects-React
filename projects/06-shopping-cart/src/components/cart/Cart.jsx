import { ClearCartIcon } from "../icons/Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  addToCart,
  removeFromCart,
  decreaseQuantity
}) {
  return (
    <li className="cart-item">
      <button className="remove-button" onClick={removeFromCart}>
        ✕
      </button>

      <img className="cart-item-image" src={thumbnail} alt={title} />

      <div className="cart-item-info">
        <strong>{title}</strong>
        <span className="cart-item-price">${price}</span>
      </div>

      <footer>
        <div className="quantity-box">
          <span>Qty: {quantity}</span>

          <button onClick={decreaseQuantity}>−</button>

          <button onClick={addToCart}>+</button>
        </div>
      </footer>
    </li>
  );
}

export function Cart({ isCartOpen, setIsCartOpen }) {
  const {
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    decreaseQuantity
  } = useCart();

  const total = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalItems = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  return (
    <>
      {isCartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <aside
        className={`cart ${
          isCartOpen ? "cart-open" : ""
        }`}
      >
        <header className="cart-header">
          <div>
            <p>Your</p>
            <h2>Cart</h2>
          </div>

          <span className="cart-count">
            {totalItems} items
          </span>
        </header>

        {cart.length === 0 && (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add products to start shopping.</p>
          </div>
        )}

        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              decreaseQuantity={() =>
                decreaseQuantity(product)
              }
            />
          ))}
        </ul>

        {cart.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row">
              <span>Total</span>
              <strong>${total}</strong>
            </div>

            <button
              className="clear-cart-button"
              onClick={clearCart}
            >
              <ClearCartIcon />
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
