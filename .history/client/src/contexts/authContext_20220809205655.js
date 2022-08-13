import { createContext, userReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'
import { apiUrl } from "./constants";

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
        const response = await axios.post(`${apiUrl}/auth`)
    } catch (error) {
        
    }
}