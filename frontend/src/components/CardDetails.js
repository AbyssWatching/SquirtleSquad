import { useCardsContext } from '../hooks/useCardsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import "../assets/css/pokecard.css"



const CardDetails = ({ card }) => {
  const { dispatch } = useCardsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:9000/api/cards/' + card._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CARD', payload: json})
    }
  }

  return (
    <div className='card-collection'>
    <div className="card-container">
      <img className='sprite' src={card.image} alt='pokemon' />
      <div className='content-container'>
        <h1 className='pokemon-name'> {card.name}</h1>
        <p className='pokemon-type'>{card.type1}</p>
        <p className='pokemon-type'>{card.type2}</p>
        <p className='pokemon-height'>Height: {card.height} dm</p>
        <p className='pokemon-weight'>Weight: {card.weight} hg</p>
      </div>
    </div>
    <button className="delete-button" onClick={handleClick}><i class="fa fa-trash-o"></i></button>
    </div>
  )
}

export default CardDetails