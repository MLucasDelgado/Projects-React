function ListOfMovies({ movies }) {
  return (
   <ul className="movies">
  {
    movies.map((movie) => (
      <li className="movie" key={movie.id}>
        <img src={movie.image} alt={movie.title} />

        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      </li>
    ))
  }
</ul>
  )
}

function NoMoviesResults() {
  return <p>No se encontraron peliculas para esta busqueda</p>;
}

export function Movies({ movies, hasSearched }) {
  const hasMovies = movies?.length > 0

  if (!hasSearched) return null

  return hasMovies
    ? <ListOfMovies movies={movies} />
    : <NoMoviesResults />
}
