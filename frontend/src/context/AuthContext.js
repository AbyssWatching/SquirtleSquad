import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext() //manage user state with Context

export const authReducer = (state, action) => {
  switch (action.type) { //switch to monitor which action we take and manage the user state 
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => { //Wraps our components and provides the current state of the user throughout our app
  const [state, dispatch] = useReducer(authReducer, { //fire Reducer when we dispatch
    user: null //set default state
  })

  useEffect(() => { //this checks for a jwt token in case the user has not been removed from local storage
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) { //and if the user is still present in local storage, dispatch the LOGIN and the payload sent is the user item
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}