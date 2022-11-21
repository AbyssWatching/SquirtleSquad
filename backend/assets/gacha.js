// function rollGacha(e)

// Use this as a reference to build this system off of.
// Excluding the new Scarlet and Violet game there 905 Pokemon available.
function randomPokemon() {
    
  //grabing pokemon from API
    var url = 'http://pokeapi.co/api/v2/pokemon/' + getPokemonID();

    //**verify pokemon doesn't already exist in collections**
    //code goes here
    //**
    //

    //we will work on this
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }

//Randomm number generator for the number of pokemon
function getPokemonID(){

  return (
    Math.floor(Math.random() * 905) + 1
    );
}

randomPokemon() //TEST

//This should be a more complete way to roll the gacha but it needs testing
// function postPokemon() {
//     var randomNumber = Math.floor(Math.random() * 1000) + 1;
//     var url = 'http://pokeapi.co/api/v2/pokemon/' + randomNumber;
//     fetch(url)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data) {
//         var pokemon = {
//           name: data.name,
//           image: data.sprites.front_default,
//           type: data.types[0].type.name
//         };
//         var url = 'http://localhost:3000/pokemon';
//         fetch(url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(pokemon)
//         })
//           .then(function(response) {
//             return response.json();
//           })
//           .then(function(data) {
//             console.log(data);
//           });
//       });
//   }
