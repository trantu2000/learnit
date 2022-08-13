import axios from "axios"
import { createContext, useReducer } from "react"
import { postReducer } from "../reducers/postReducer"
import { apiUrl } from "./constants"

export const PostContext = createContext()


const PostContextProvuder = ({children}) => {

    //state
    const [postState, dispatch] = useReducer(postReducer,{
        posts: [],
        postsLoading: true
    })

    //Get all posts
    const getPosts = async () => {
        try {
            const reponse = await axios.get(`${apiUrl}/posts`)
        } catch (error) {
            
        }
    }
    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvuder;