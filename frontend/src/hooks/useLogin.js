import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null) //set state to null
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true) //state change
    setError(null)

    const response = await fetch('http://localhost:9000/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }) //stringify the email and password
    })
    const json = await response.json() //await the response

    if (!response.ok) {
      setIsLoading(false) //if not okay throw error
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json}) //dispatch our login case with our payload containing the user json

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}