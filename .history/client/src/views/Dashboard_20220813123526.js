import { useContext, useEffect } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import { AuthContext } from "../contexts/authContext"
import { PostContext } from "../contexts/PostContext"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/esm/Button"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import SinglePost from "../components/posts/SinglePost"
import AddPostModal from "../components/posts/AddPostModal"
import addIcon from '../assets/plus-circle-fill.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Toast from 'react-bootstrap/Toast'



const Dashboard = () => {

  //Contexts
  const { authState: { user: { username } } } = useContext(AuthContext)

  const {
    postState: { posts, postsLoading },
    getPosts,
    setShowAddPostModal,
    showToast: { show, message, type },
    setShowToast
  } = useContext(PostContext)

  //Start: Get all posts
  useEffect(() => {
    getPosts()
  });

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
            <Card.Title>Welcome to LearnIt</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
            </Card.Text>
            <Button variant="primary">LearnIt</Button>
          </Card.Body>
        </Card>
      </>
    )
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-1">
          {posts.map(post => (
            <Col key={post._id} className='my-2'>
              <SinglePost post={post} />
            </Col>
          ))}

        </Row>
        {/* Open Add Post Modal */}
        <OverlayTrigger placement="left" overlay={<Tooltip>Add a new thing to learn</Tooltip>}>
          <Button className="btn-floating" onClick={setShowAddPostModal.bind(this, true)}>
            <img src={addIcon} alt="add-post" width='60' height='60' />
          </Button>
        </OverlayTrigger>

      </>
    )
  }

  return (
    <>
      {body}
      <AddPostModal />
      {/* After post is added , show toast */}
      <Toast
        show={show}
        style={{ position: 'fixed', top: '20%', right: '10px', width: '10rem' }}
        className={`bg-${type} text-white`}
        onClose={setShowToast.bind(this, {
          show: false,
          message: '',
          type: null
        })}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </>
  )
}

export default Dashboard