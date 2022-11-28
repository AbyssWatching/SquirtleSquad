import { useCardsContext } from '../hooks/useCardsContext'
import { useAuthContext } from '../hooks/useAuthContext'



const CardDetails = ({ card }) => {
  const { dispatch } = useCardsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:9000/api/cards/' + card.id, {
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
    <div className="card-container">
      <img src={card.image} alt='pokemon' />
      <h1 className='pokemon-name'>{card.name}</h1>
      <p className='pokemon-type'>Types: {card.type1} {card.type2}</p>
      <p className='pokemon-height'>Height: {card.height}</p>
      <p className='pokemon-weight'>Weight: {card.weight}</p>
      <span className="" onClick={handleClick}>delete</span>
    </div>
  )
}

export default CardDetails