var randomNumber = Math.floor(Math.random() * 905) + 1;


var url = 'http://pokeapi.co/api/v2/pokemon/' + 092;


fetch(url)
  
.then(function(response) 
  {
    return response.json();
  })
    
  .then(function(data) 
    {
      var cards = {
      poke_id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      type: data.types[0].type.name,
      secondary_type: data.types[1].type.name
    };
      
var urlCards = 'http://localhost:3000/cards';

fetch(urlCards, 
    {
      method: 'POST',
      headers: 
      {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(cards)
    })

  .then(function(response) 
  {
    return response.json();
  })
        
  .then(function(data) 
  {
    console.log(data);
  });

  })

// secondary type is being recieved as undefined at not null, it needs to be set to null, verify with 132 Ditto 092 Gengar
// add a quantity column then verify pokemon id doesn't already exist and if it does add a plus one to quantity