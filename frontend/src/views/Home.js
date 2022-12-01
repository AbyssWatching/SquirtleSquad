import { useEffect }from 'react'
import { useCardsContext } from "../hooks/useCardsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import "../assets/css/pokedex.css"

// components
import CardDetails from '../components/CardDetails'
import GachaSystem from '../components/GachaSystem'
import AudioPlayer from '../components/AudioPlayer'

const Home = () => {
  const {cards, dispatch} = useCardsContext() // so the current state is null until we want to fetch which is our dispatch when we fetchCards below
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('http://localhost:9000/api/cards', { //fetch cards from our api
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json() //pass the json fetched from the api

      if (response.ok) {
        dispatch({type: 'SET_CARDS', payload: json}) //dispatch our action to SET cards and our payload is the cards we're getting from our server
      }
    }

    if (user) {
      fetchCards()
    }
  }, [dispatch, user]) //external dependencies need to be declared in dependency array. IN ANY WAY the dispatch function changes it would re-run fetchCards which shouldn't happen

  return (
    <div className="home">
      <div className='pokedex-top-container'>
      <div className='lens-blue'>
        <div className='lens-shine'></div>
      </div>
        <div className='light-container'><div className='light-red'></div><div className='light-yellow'></div><div className='light-green'></div></div>
        </div>
      <div className="cards">
        <AudioPlayer />
        <GachaSystem />
        <br></br>
        {cards && cards.map((card) => ( //Only map if we have a value for "cards" 
          <CardDetails key={card._id} card={card} /> //then map each individual workout giving them a key with their unique id and a title of card
        ))}
      </div>
    </div>
  )
}

export default Home