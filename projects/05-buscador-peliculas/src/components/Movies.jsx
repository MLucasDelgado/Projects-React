function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
    {
        movies.map((movies) => (
        <li className="movie" key={movies.id}>
            <h3>{movies.title}</h3>
            <p>{movies.year}</p>
            <img src={movies.image} alt={movies.title} />
        </li>
        ))
    }
  </ul>
  )
}

function NoMoviesResults() {
  return <p>No se encontraron peliculas para esta busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
