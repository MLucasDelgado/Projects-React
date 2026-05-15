import { useState, useRef, useEffect } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from './hooks/useMovies';
import debounce from 'just-debounce-it'
import "./App.css";

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current && search === '') return

    isFirstInput.current = false

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.startsWith(' ')) {
      setError('La busqueda no puede empezar con un espacio')
      return
    }

    if (/^\d+$/.test(search)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [hasSearched, setHasSearched] = useState(false)
  const [sortBy, setSortBy] = useState(null);
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ sortBy })

const debounceGetMovies = useRef(
  debounce((search) => {
    getMovies({ search })
  }, 500)
).current

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
  const newSearch = event.target.value
  // getMovies({ search: newSearch})
  updateSearch(newSearch)

  if (newSearch.trim() !== '') {
    setHasSearched(true)
  }

  debounceGetMovies(newSearch)
}

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input style={{ border: '1px solid white', borderColor: error ? 'red' : 'transparent' }}
            onChange={handleChange}
            value={search}
            name='query'
            type="text"
            placeholder='Avengers, Start Wars, The Matrix...'
          />
          <select onChange={(event) => setSortBy(event.target.value)} value={sortBy ?? ''}>
            <option value="">Sin ordenar</option>
            <option value="title">Titulo</option>
            <option value="year">Año</option>
          </select>
          {/* <button type="submit">Buscar</button> */}
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} hasSearched={hasSearched}/>
        }
      </main>
    </div>
  );
}

export default App;
