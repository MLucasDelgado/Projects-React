import './App.css'
import { useCat } from './hooks/useCatFact'
import { useCatImge } from './hooks/useCatImage'

export function App () {
  const { fact, randomFact } = useCat()
  const { imageUrl } = useCatImge({ fact })

  const handleClick = async () => {
    randomFact()
  }

  return (
    <main>
      <h1>Kitten App</h1>
      <button onClick={handleClick}>Get new fact</button>
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
