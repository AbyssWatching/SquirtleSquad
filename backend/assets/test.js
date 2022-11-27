var randomNumber = Math.floor(Math.random() * 905) + 1;


var url = 'http://pokeapi.co/api/v2/pokemon/' + 132;


fetch(url)
  
.then(function(response) 
  {
    return response.json();
  })
    
  .then(function(data) 
    {
      var cards = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      type1: data.types[0].type.name,
      type2: data.types[1]?.type.name ?? null 
    };
    
      
var urlCards = 'http://localhost:9000/api/cards';

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

// add a quantity column then verify pokemon id doesn't already exist and if it does add a plus one to quantity