import React from 'react'
import PokeCard from './PokeCard'

export default function Collection() {
  return (
    <div className='collectionpage' id='collectionpage'>Collection
        <PokeCard />
        {/* {pokecha.map(pokemon => (
          <div className='pokecard-container'>
          <div className='pokecard-image'>
            <img className='sprite' src={pokemon.sprites.front_default} alt='pokemon sprite'></img>
          </div>
          <div className='pokecard-content-container'>
            <h1 className='pokemon-name'>Name: {pokemon.name}</h1>
            <p className='pokemon-type'>Type: {pokemon.types[0].type.name}</p>
            <p className='pokemon-height'>Height: {pokemon.height}</p>
            <p className='pokemon-weight'>Weight: {pokemon.weight}</p>
          </div>
        </div>
        ))} */}
        {/* Onclick preview image function */}
        {/* Limit amount of cards to show at a time  */}
        {/* Create pagination */}
    </div>
  )
}
