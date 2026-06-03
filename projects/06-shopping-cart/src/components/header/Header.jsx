import './Header.css'
import { CartIcon } from '../icons/Icons'
import { useCart } from '../../hooks/useCart'

export function Header({ isCartOpen, setIsCartOpen }) {
  const { cart } = useCart()

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return (
    <header className='header'>
      <h1 className='header-title'>
        SHOPPING <span className='header-span'>CART</span>
      </h1>

      <button className='header-cart-info' onClick={() => setIsCartOpen(!isCartOpen)}>
        <CartIcon />
        <span>{totalItems}</span>
      </button>
    </header>
  )
}