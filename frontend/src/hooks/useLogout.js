import { useAuthContext } from "./useAuthContext";
import { useCardsContext } from "./useCardsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    

    const logout = () => {
        // REMOVE USER FROM STORAGE
        localStorage.removeItem('user')

        // DISPATCH LOGOUT
        dispatch({type: 'LOGOUT'})
    }
}