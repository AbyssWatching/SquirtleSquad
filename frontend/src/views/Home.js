import { useEffect }from 'react'
import { useCardsContext } from "../hooks/useCardsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import CardDetails from '../components/CardDetails'
// import rollPokemon from '../components/GachaSystem'
import GachaSystem from '../components/GachaSystem'

const Home = () => {
  const {cards, dispatch} = useCardsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('/api/cards', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_CARDS', payload: json})
      }
    }

    if (user) {
      fetchCards()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <div className="cards">
        {cards && cards.map((card) => (
          <CardDetails key={card.id} card={card} />
        ))}
      </div>
      <GachaSystem />
    </div>
  )
}

export default Home