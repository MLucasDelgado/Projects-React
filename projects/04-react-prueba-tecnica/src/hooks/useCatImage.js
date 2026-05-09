import { useState, useEffect } from 'react'

export function useCatImge ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Obtener la imagen del gato usando las primeras tres palabras del hecho
  useEffect(() => {
    if (!fact) return
    const firstThreeLetters = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeLetters}?fontSize=50&fontColor=white&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl }
}
