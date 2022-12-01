import { createContext, useReducer } from 'react'

export const CardsContext = createContext()

export const cardsReducer = (state, action) => { //state which is set to null, then our action is what we want to do with the data, create, set, etc...
  switch (action.type) { //switch statement since we could have three actions to our cards
    case 'SET_CARDS': //in this case we are setting cards
      return { //we want to return a new value for the current state/ return a new object
        cards: action.payload //in this case the action.payload is that the action we want to do so SET and payload is an array of all the Cards
      }
    case 'CREATE_CARDS':
      return {
        cards: [action.payload, ...state.cards] //here the action we want to do is CREATE so the payload is the data we are passing for a new card, then '...' is to spread the state of the cards so in this case we are grabing the previous state of the currently existing cards. So add new then grab the rest. 
      }
    case 'DELETE_CARD':
      return {
        cards: state.cards.filter((w) => w._id !== action.payload._id) // state = CURRENT state (so all SET cards). cards is our cards array then filter said cards then fire functions for each one and return true or false for each one. If Card ID does not match our payload Card ID DO NOT DELETE. So now we're left with all our currents except for the one we just deleted
      }
    default: //if none match
      return state //return the state null
  }
}

export const CardsContextProvider = ({ children }) => { //children is everything that this provider component wraps in our app. This allows everything wrapped by the providor to use the CardsContext
  const [state, dispatch] = useReducer(cardsReducer, { //dispatch is the action to invoke a change in state
    cards: null //The current global state of cards
  })

  return (
    <CardsContext.Provider value={{...state, dispatch}}> {/*'...'spread the properties of our object*/}
       { children } {/*children in this case is the root App component*/}
    </CardsContext.Provider>
  )
}