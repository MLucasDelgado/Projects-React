import { AddToCartIcon, RemoveFromCartIcon } from "../icons/Icons";
import { useCart } from "../../hooks/useCart";
import "./Products.css";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <button className="favorite-btn">♡</button>

              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong>
                <span>${product.price}</span>
              </div>

              <footer>
                <button
                  className={isProductInCart ? "remove-btn" : "add-btn"}
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                >
                  {isProductInCart ? (
                    <>
                      <RemoveFromCartIcon />
                      Remove
                    </>
                  ) : (
                    <>
                      <AddToCartIcon />
                      Add to cart
                    </>
                  )}
                </button>
              </footer>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
