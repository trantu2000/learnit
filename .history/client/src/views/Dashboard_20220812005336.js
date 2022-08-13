import { useContext, useEffect } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import { AuthContext } from "../contexts/authContext"
import { PostContext } from "../contexts/PostContext"
import Card from 'react-bootstrap/Card'


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

  if (postsLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    )
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as='h1'>{username}</Card.Header>
          <Card.Body>
            
          </Card.Body>
        </Card>
      </>
    )
  }

  return (
    <>
    </>
  )
}

export default Dashboard