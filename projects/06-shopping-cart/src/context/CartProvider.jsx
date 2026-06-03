import { CartContext } from "./cart";
import { useReducer } from "react";
import { reducer, cartInitialState } from "../reducer/cart";

function useCartReducer () {
     const [state, disptach] = useReducer(reducer, cartInitialState)

    const addToCart = (product) => {
        disptach({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    const removeFromCart = (product) => {
        disptach({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    const decreaseQuantity = (product) => {
        disptach({
            type: 'DECREASE_QUANTITY',
            payload: product
        })
    }
   
    const clearCart = () => {
        disptach({
            type: 'CLEAR_CART'
        })
    }
    return { state, addToCart, removeFromCart, decreaseQuantity,  clearCart}
}

export const CartProvider = ({ children }) => {
   const {state, addToCart, removeFromCart, decreaseQuantity, clearCart} = useCartReducer()
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}