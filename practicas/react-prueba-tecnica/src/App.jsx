import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

import './App.css'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const { fact, refresFact } = useCatFact()
  const { imageId } = useCatImage({ fact })

  const handleClick = async () => {
    refresFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageId && <img src={imageId} alt={`Image extracted using first three words for ${fact}`} />}
    </main>
  )
}
