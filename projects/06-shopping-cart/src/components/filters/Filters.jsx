import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'
import './Filters.css'

export function Filters ({ products }) {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const categories = [...new Set( // set para eliminar duplicados y luego lo volvemos a convertir en array con el spread operator
        products?.map(product => product.category) 
    )]

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: (event.target.value)
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: (event.target.value)
        }))
    }

    return (
        <section className='filters'>
  <div className='filter-group'>
    <label htmlFor={minPriceFilterId}>
      Minimum Price:
    </label>

    <input
      type='range'
      id={minPriceFilterId}
      min='0'
      max='2000'
      onChange={handleChangeMinPrice}
      value={filters.minPrice}
    />

    <span className='filter-value'>
      ${filters.minPrice}
    </span>
  </div>

  <div className='filter-group'>
    <label htmlFor={categoryFilterId}>
      Sort by:
    </label>

    <select
      id={categoryFilterId}
      onChange={handleChangeCategory}
      value={filters.category}
    >
      <option value='all'>Featured</option>

      {categories.map(category => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  </div>
</section>
    )
}