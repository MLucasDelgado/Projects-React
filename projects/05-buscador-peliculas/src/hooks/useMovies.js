import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

const SORT_FUNCTIONS = {
    title: (a, b) => a.title.localeCompare(b.title),
    year: (a, b) => a.year - b.year
}

export function useMovies ({ sortBy }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef()

    const getMovies = useCallback(async ({ search }) => {
        if(search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            setError(error.message)
        } finally {
            // entra tanto en el try como el catch
            setLoading(false)
        }
    }, [])

    const sortedMovies = useMemo(() => {
        if (!sortBy) return movies
        const sortFunction = SORT_FUNCTIONS[sortBy]

        return [...movies].sort(sortFunction)

    }, [sortBy, movies])

    return { movies: sortedMovies, getMovies, loading, error}
}