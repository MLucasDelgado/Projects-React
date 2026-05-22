import { CartIcon, ClearCartIcon } from '../icons/Icons';
import { useId } from 'react';
import { useCart } from '../../hooks/useCart'
import './Cart.css'

function CartItem ({thumbnail, title, price, quantity, addToCart, removeFromCart}) {
    return (
        <li>
            <button className='remove-button' onClick={removeFromCart}>✕</button>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const { cart, clearCart, addToCart, removeFromCart } = useCart()
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}><CartIcon /></label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                            <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            removeFromCart={() => removeFromCart(product)}
                            {...product}/>
                        ))
                    }
                </ul>
            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
            </aside>
        </>
    )
}