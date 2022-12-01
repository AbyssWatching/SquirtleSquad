import { useAuthContext } from '../hooks/useAuthContext'
import { useCardsContext } from '../hooks/useCardsContext'

const GachaSystem = () => {
  const { user } = useAuthContext()
  const { dispatch } = useCardsContext()

  async function getPokemonData(pokemonId) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`); //fetch data from the API
      const data = await response.json();
      return data;
    }

  async function rollPokemon() {

      const randomPokemonId = Math.floor(Math.random() * 905) + 1; 
      const data = await getPokemonData(randomPokemonId); //grab our random pokemon
      const pokemonId = data.id; //all our properties for the cards table in the db, defining the data we need
      const pokemonName = data.name;
      const pokemonType1 = data.types[0].type.name;
      const pokemonType2 = data.types[1]?.type.name ?? null;
      const pokemonWeight = data.weight;
      const pokemonHeight = data.height;
      const pokemonImage = data.sprites.front_default;
      const card = { // define card which will be the data we want to send in json
          id: pokemonId,
          name: pokemonName,
          type1: pokemonType1,
          type2: pokemonType2,
          height: pokemonHeight,
          weight: pokemonWeight,
          image: pokemonImage,
      };
      const options = { //options is additional 'config' in our case we are using the POST method submitting the Authorization key and content type
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify(card) //we are also sending the card data in json here
      };
      const response = await fetch('http://localhost:9000/api/cards', options); 
      const json = await response.json(); //send our request
      if (response.ok) {
        dispatch({type: 'CREATE_CARDS', payload: json}) //if the response is okay dispatch (action) CREATE_CARDS and payload (card)
      } 
    var btnCount = 0;
    function addRow() {
        btnCount++;
        if(btnCount > 3) {
            alert("You can't click me anymore");
            return;
        }
    }




    }

    return (
      <button className='roll-button btn' onClick={() => rollPokemon()}>Roll Pokemon</button>
    )
  } 


export default GachaSystem