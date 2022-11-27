import React from 'react'
import '../assets/css/pokecard.css'

export default function PokeCard() {
  return (
    <div className='pokecard'>
      <div className='pokecard-container'>
        <div className='pokecard-image'>
          <image className='sprite' alt='pokemon sprite'>image</image>
        </div>
        <div className='pokecard-content-container'>
          <h1 className='pokemon-name'>Name</h1>
          <p className='pokemon-height'>Height:</p>
          <p className='pokemon-weight'>Weight:</p>
        </div>
      </div>
    </div>
    // design card with css
    // fetch data from pokeapi and put on card
     
  )
}
