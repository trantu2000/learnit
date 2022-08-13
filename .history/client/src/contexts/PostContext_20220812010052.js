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
            const response = await axios.get(`${apiUrl}/posts`)
            if(response.data.success){
                dispatch({type: 'POST_LOADED_SUCCESS', payload: response.data.posts})
                dispatch({type: 'POST_LOADED_FAIL'})
            }
        } catch (error) {
            // return error.response.data
            //     ? error.response.data
            //     : {success: false,message: 'Server error'}
        }
    }
    //Post constext data
    const postContextData = {postState, getPosts}
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvuder;