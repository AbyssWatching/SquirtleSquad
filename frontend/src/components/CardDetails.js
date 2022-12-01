import { useCardsContext } from '../hooks/useCardsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import "../assets/css/pokecard.css"



const CardDetails = ({ card }) => { //destructure from property
  const { dispatch } = useCardsContext() //grab dispatch function
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:9000/api/cards/' + card._id, { //find by unique id of card in the db
      method: 'DELETE', //here's the method
      headers: {
        'Authorization': `Bearer ${user.token}` //token requirement
      }
    })
    const json = await response.json() //this is where the card we just deleted is now

    if (response.ok) {                              // and if okay
      dispatch({type: 'DELETE_CARD', payload: json}) //delete
    }
  }


  return (
    <div className='card-collection'>
      <div className="card-container">
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${card.name}_(Pokémon)`} rel="noreferrer" target="_blank"><img className='sprite' src={card.image} alt='pokemon'/></a>
        <div className='content-container'>
          <h1 className='pokemon-name'> {card.name}</h1>
          <p className='pokemon-id'>#{card.id}</p>
          <p className='pokemon-type'>{card.type1} {card.type2}</p>
          <p className='pokemon-height'>Height: {card.height} dm</p>
          <p className='pokemon-weight'>Weight: {card.weight} hg</p>
          <button className="btn delete delete-button" onClick={handleClick}><i className="fa fa-trash-o"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CardDetails