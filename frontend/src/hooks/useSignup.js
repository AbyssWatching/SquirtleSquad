import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null) //default state is null
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    setIsLoading(true) //changer state when users submit
    setError(null)

    const response = await fetch('http://localhost:9000/api/user/signup', { //our api endpoint
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }) //passing the user's request in json
    })
    const json = await response.json() //our response

    if (!response.ok) {
      setIsLoading(false) //return error if not okay
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json)) 

      // update the auth context
      dispatch({type: 'LOGIN', payload: json}) //send the json to update state

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}