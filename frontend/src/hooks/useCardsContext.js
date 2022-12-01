import { CardsContext } from '../context/CardsContext'
import { useContext } from 'react'

export const useCardsContext = () => {
  const context = useContext(CardsContext) //useContext is the hook and we pass in the value of our context so in our case an object with state and dispatch function

  if (!context) { //ensure we're in scope to use this context
    throw Error('useCardsContext must be used inside an CardsContextProvider')
  }

  return context //return the state
}