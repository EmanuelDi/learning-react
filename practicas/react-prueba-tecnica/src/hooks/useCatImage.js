import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

// Custom Hook
export function useCatImage ({ fact }) {
  const [imageId, setImageId] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        setImageId(_id)
      })
  }, [fact])

  return { imageId: `${CAT_PREFIX_IMAGE_URL}${imageId}` }
}
