const axios = require('axios')

async function getPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();
    return data;
  }

async function rollPokemon() {
    const randomPokemonId = Math.floor(Math.random() * 905) + 1;
    const pokemonData = await getPokemonData(randomPokemonId);
    const pokemonId = pokemonData.id;
    const pokemonName = pokemonData.name;
    const pokemonType1 = pokemonData.types[0].type.name;
    const pokemonType2 = pokemonData.types[1]?.type.name ?? null;
    const pokemonWeight = pokemonData.weight;
    const pokemonHeight = pokemonData.weight;
    const pokemonImage = pokemonData.sprites.front_default;
    const pokemonDataToPost = {
        id: pokemonId,
        name: pokemonName,
        type1: pokemonType1,
        type2: pokemonType2,
        height: pokemonHeight,
        weight: pokemonWeight,
        image: pokemonImage
    };
    console.log(pokemonDataToPost);
    const response = await axios.post('http://localhost:9000/api/cards', pokemonDataToPost);
    return response.data;
  }

rollPokemon()