import { Filters } from "../filters/Filters"

export function Header ({  products }) {
    return (
        <header>
            <h1>Shopping Cart</h1>
            <Filters products={products}/>
        </header>
    )
}