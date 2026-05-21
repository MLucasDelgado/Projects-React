import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products/Products'
import { Header } from './components/header/Header'
import { useState } from 'react'
import { Footer } from './components/footer/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/cart/Cart'
import { CartProvider } from './context/CartProvider'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Cart />
      <Header products={products} />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
