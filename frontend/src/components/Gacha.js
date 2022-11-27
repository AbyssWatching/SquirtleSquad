import React from 'react'
import '../assets/css/gacha.css'

function clickMe(){
    alert('You clicked me!')
}

function newCard() {

    const place = document.getElementById('collectionpage')
  
    const newCard = document.createElement("div");
    newCard.classList.add('pokecard');
  
    

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('pokecard-container');
    
  
    newCard.appendChild(cardContainer);
  
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('pokecard-image');
  
    const sprite = document.createElement('img');
    sprite.classList.add('sprite');
    // sprite.src = pokemon.sprites.fron_default;
    sprite.alt = "pokemon sprite";
  
    spriteContainer.appendChild(sprite);

    cardContainer.appendChild(spriteContainer)
  
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('pokecard-content-container');
  
    const pokemonName = document.createElement('h1');
    pokemonName.classList.add('pokemon-name');
    pokemonName.innerText = "Name";
  
    const pokemonType = document.createElement('p');
    pokemonType.classList.add('pokemon-type');
    pokemonType.innerText = "Type:";
  
    const pokemonHeight = document.createElement('p');
    pokemonHeight.classList.add('pokemon-height');
    pokemonHeight.innerText = "Height:";
  
    const pokemonWeight = document.createElement('p');
    pokemonWeight.classList.add('pokemon-weight');
    pokemonWeight.innerText = "Weight:";
    
    
    contentContainer.appendChild(pokemonName);
    contentContainer.appendChild(pokemonType);
    contentContainer.appendChild(pokemonHeight);
    contentContainer.appendChild(pokemonWeight);
    cardContainer.appendChild(contentContainer)
    place.appendChild(newCard)
  }

export default function Gacha() {
  return (
    <div>Gacha page
        <button className='gachaButton' onClick={newCard}> Play </button>
    </div>
  )
}
