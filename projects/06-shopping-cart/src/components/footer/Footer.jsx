import './Footer.css'
// import { useCart } from '../../hooks/useCart';

export function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
       <p>Prueba técnica de React ⚛️ — <span>@midudev</span></p>
      <small>Shopping Cart con useContext & useReducer</small>
    </footer>
  )
}