import axios from "axios"
import { createContext, useReducer, useState } from "react"
import { postReducer } from "../reducers/postReducer"
import { apiUrl, POST_LOADED_SUCCESS, POST_LOADED_FAIL } from "./constants"

export const PostContext = createContext()


const PostContextProvider = ({ children }) => {

    //state
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })

    const [showAddPostModal, setShowAddPostModal] = useState(false)

    //Get all posts
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/posts`)
            if (response.data.success) {
                dispatch({ type: POST_LOADED_SUCCESS, payload: response.data.posts })

            }
        } catch (error) {
            // return error.response.data
            //     ? error.response.data
            //     : {success: false,message: 'Server error'}
            dispatch({ type: POST_LOADED_FAIL })
        }
    }
    //Post constext data
    const postContextData = { postState, getPosts }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider;