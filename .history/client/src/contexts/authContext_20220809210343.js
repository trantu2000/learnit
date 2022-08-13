import { createContext, userReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    const [authSate, dispatch] = userReducer(authReducer,{
        authLoading: true,
        isAuthenticated: false,
        user: null
    })
}
//login
const loginUser = async userForm =>{
    try {
        const response = await axios.post(`${apiUrl}/auth/login`)
        if(response.data.success)
        localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)

        return response.data
    } catch (error) {
        
    }
}