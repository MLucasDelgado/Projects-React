import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/products/Products";
import { Header } from "./components/header/Header";
import { useState } from "react";
import { Footer } from "./components/footer/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./context/CartProvider";
import { Filters } from "./components/filters/Filters";
import "./index.css";

function App() {
  const [products] = useState(initialProducts);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <div className="app">
        <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <main className="main-content">
          <Filters products={products} />
          <Products products={filteredProducts} />
        </main>

        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
