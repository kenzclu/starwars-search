import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { fetchCharacter, getHomeWorld, getFilms } from '../../lib/api'
import Container from '../atom/Container'
import './Character.scss'

function Character () {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const history = useHistory()

  useEffect(async () => {
    try {
      const currentCharacter = await fetchCharacter(id)
      currentCharacter.homeworld = await getHomeWorld(currentCharacter.homeworld)
      currentCharacter.films = await getFilms(currentCharacter.films)
      setCharacter(currentCharacter)
    } catch (err) {
      // Redirects user to the search page
      history.push('/')
    }
  }, [])

  console.log(character)
  console.log(id)
  return (
    <Container center verticalCenter>
      <Link to='/'><div className='go-back'>{'< Go back'}</div></Link>
      {!character && <div>Loading...</div>}
      {!!character &&
        <div className='character'>
          <div className='title'>
            <h1>{character.name}</h1>
            <div>({character.homeworld})</div>
          </div>
          <h3>Films</h3>
          {character.films.map((film, index) => {
            return <div className='film' key={`film-${index}`}>{film}</div>
          })}
        </div>}
    </Container>
  )
}

export default Character
