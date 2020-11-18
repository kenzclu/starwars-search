import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Home.scss'
import Container from '../atom/Container'
import { Link } from 'react-router-dom'
import { fetchAllCharacters } from '../../lib/api'
import { getCharacterId } from '../../lib/helper'

function Home () {
  const [name, setName] = useState('')
  const [characters, setCharacters] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = async (e) => {
    setName(e.target.value)
  }

  useEffect(async () => {
    setCharacters(await fetchAllCharacters())
  }, [])

  const canSubmit = name.length > 0
  const matchedCharacters = characters.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
  return (
    <Container center>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange} placeholder='Enter name' />
        <input className={classNames({ disabled: !canSubmit })} type='submit' value='Search' disabled={!canSubmit} />
      </form>
      <div className='character-container'>
        {characters.length === 0 && 'Loading...'}
        {characters.length > 0 && matchedCharacters.length === 0 && <div>No matches found</div>}
        {characters.length > 0 && name.length === 0 && <div>Please enter a name</div>}
        {name.length > 0 && matchedCharacters.map((character, index) => {
          return (
            <div className='character' key={`swchar-${getCharacterId(character.url)}`}>
              <Link to={`/sw/${getCharacterId(character.url)}/`}>
                <div>{character.name}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Home
