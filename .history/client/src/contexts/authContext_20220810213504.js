import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";
import axios from 'axios';
import setAuthToken from "../utils/setAythToken";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authSate, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    //Authenticate user
    const loadUser = async () => {
        if(localStorage[LOCAL_STORAGE_TOKEN_NAME]){
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
        }
    }

    //login
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`,userForm)
            if (response.data.success)
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)

            return response.data
        } catch (error) {
            if (error.response.data) return error.response.data
            else return { success: false, message: error.message }
        }
    }
    //Context data
    const authContextData = { loginUser }

    //Return provider
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
