import { createContext, useReducer } from "react"
import { postReducer } from "../reducers/postReducer"

export const PostContext = createContext()


const PostContextProvuder = ({children}) => {

    //state
    const [postState, dispatch] = useReducer(postReducer,{
        posts: [],
    })
    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}
export default PostContextProvuder;