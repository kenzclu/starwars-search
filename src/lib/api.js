// Calls API
import Axios from 'axios'

export const fetchAllCharacters = async () => {
  const characters = []
  let response = await Axios.get('http://swapi.dev/api/people/')
  while (response.data.next !== null) {
    for (const character of response.data.results) {
      characters.push(character)
    }
    response = await Axios.get(response.data.next)
  }
  console.log(characters)
  return characters
}

export const fetchCharacter = async (id) => {
  const response = await Axios.get(`http://swapi.dev/api/people/${id}/`)
  return response.data
}

export const getHomeWorld = async (url) => {
  const response = await Axios.get(url)
  return response.data.name
}

export const getFilms = async (films) => {
  const filmNames = []
  for (const film of films) {
    const response = await Axios.get(film)
    filmNames.push(response.data.title)
  }
  return filmNames
}
