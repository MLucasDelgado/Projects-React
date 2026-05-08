import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Obtener un hecho aleatorio sobre gatos al cargar el componente
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

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

  return (
    <main>
      <h1>App de gatitos</h1>

      <section>
        {
          fact && <p>{fact}</p>
        }
        {
        imageUrl && <img src={imageUrl} alt={`Image extractes using the first word for ${fact}`} />
        }
      </section>
    </main>
  )
}
