import { createContext, userReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from 'axios'

export const AuthContext = createContext()