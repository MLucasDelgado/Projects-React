import { CartContext } from "./cart";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        // Compruebo si el producto ya está en el carrito
        const productInCart = cart.findIndex(item => item.id === product.id);

        if(productInCart >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCart].quantity += 1;
            return setCart(newCart);
        }

        // producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]) )
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}