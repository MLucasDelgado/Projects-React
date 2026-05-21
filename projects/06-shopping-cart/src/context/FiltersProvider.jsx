import { FiltersContext } from './filters'
import { useState } from 'react'

// 2. Crear el priveder, para proveer el contexto a los componentes que lo necesiten
// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}