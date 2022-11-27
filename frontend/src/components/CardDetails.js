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
    <div className="card-details">
      <img url={card.img} alt='pokemon' />
      <span className="" onClick={handleClick}>delete</span>
    </div>
  )
}

export default CardDetails