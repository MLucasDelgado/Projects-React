import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'

export function useCat () {
  const [fact, setFact] = useState()

  const randomFact = async () => {
    const fact = await getRandomFact()
    setFact(fact)
  }

  // Obtener un hecho aleatorio sobre gatos al cargar el componente
  useEffect(() => {
    randomFact()
  }, [])
  return { fact, randomFact }
}
