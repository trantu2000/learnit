import { useContext } from "react"
import { PostContext } from "../contexts/PostContext"


const Dashboard = () => {
  
    //Contexts
    const{
      postState: {posts, postsLoading},
      getPosts
    } = useContext(PostContext)

    //Start: Get all posts
    return (
      <>
      </>
    )
}

export default Dashboard