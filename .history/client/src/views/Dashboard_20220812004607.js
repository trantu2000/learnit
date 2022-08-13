import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/authContext"
import { PostContext } from "../contexts/PostContext"


const Dashboard = () => {

  //Contexts
  const { authState: { user: { username } } } = useContext(AuthContext)

  const {
    postState: { posts, postsLoading },
    getPosts
  } = useContext(PostContext)

  //Start: Get all posts
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
    </>
  )
}

export default Dashboard