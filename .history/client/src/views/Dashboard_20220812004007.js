import { useContext, useEffect } from "react"
import { PostContext } from "../contexts/PostContext"


const Dashboard = () => {
  
    //Contexts
    const{
      postState: {posts, postsLoading},
      getPosts
    } = useContext(PostContext)

    //Start: Get all posts
    useEffect(() => getPosts(),[])
    return (
      <>
      </>
    )
}

export default Dashboard