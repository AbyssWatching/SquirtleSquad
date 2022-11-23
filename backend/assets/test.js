    var randomNumber = Math.floor(Math.random() * 905) + 1;
    var url = 'http://pokeapi.co/api/v2/pokemon/' + randomNumber;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var cards = {
          poke_id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          type: data.types[0].type.name
        };
        var url = 'http://localhost:3000/cards';
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cards)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log(data);
          });
      });