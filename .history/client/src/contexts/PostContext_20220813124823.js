import axios from "axios"
import { createContext, useReducer, useState } from "react"
import { postReducer } from "../reducers/postReducer"
import { apiUrl, POST_LOADED_SUCCESS, POST_LOADED_FAIL, ADD_POST } from "./constants"

export const PostContext = createContext()


const PostContextProvider = ({ children }) => {

    //state
    const [postState, dispatch] = useReducer(postReducer, {
        posts: [],
        postsLoading: true
    })

    const [showAddPostModal, setShowAddPostModal] = useState(false)

    const [showToast, setShowToast] = useState({
        show: false,
        message: '',
        type: null
    })


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
    //Adsd post
    const addPost = async newPost => {
        try {
            const response = await axios.post(`${apiUrl}/posts`, newPost)
            if (response.data.success) {
                dispatch({ type: ADD_POST, payload: response.data.post })
                return response.data
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }
    //Post constext data
    const postContextData = {
        postState,
        getPosts,
        showAddPostModal,
        setShowAddPostModal,
        addPost,
        showToast,
        setShowToast
    }

    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvider;