import { useContext, useEffect } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
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

  let body = null

  if(postsLoading){
    body = (
      <div className="spinner-container">
        <Spinner animation="border"/>
      </div>
    )
  }

  return (
    <>
    </>
  )
}

export default Dashboard