import { createContext } from "react"

export const PostContext = createContext()

const PostContextProvuder = ({children}) => {
    return (
        <PostContext.Provider>
            {children}
        </PostContext.Provider>
    )
}