import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from '../icons/Icons';
import { useId } from 'react';
import './Cart.css'

export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}><CartIcon /></label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className='cart'>

            </aside>
        </>
    )
}