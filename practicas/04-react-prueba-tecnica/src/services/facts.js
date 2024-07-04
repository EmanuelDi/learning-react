const CAT_ENDPOINT_FACT = 'https://meowfacts.herokuapp.com'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_FACT)
  const resp = await res.json()
  const { data } = resp
  return data[0]
}
