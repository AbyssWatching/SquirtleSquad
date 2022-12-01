import { useAuthContext } from "./useAuthContext";
import { useCardsContext } from "./useCardsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchCards } = useCardsContext()
    

    const logout = () => {
        // REMOVE USER FROM STORAGE
        localStorage.removeItem('user')

        // DISPATCH LOGOUT
        dispatch({type: 'LOGOUT'}) //Dispatch logout and we already set the user state to null
        dispatchCards({ type: 'SET_CARDS', payload: null}) //Set the state to null so the cards get removed from the dashboard
    }

    return { logout }
}