import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
const SinglePost = ({ post: { _id, status, title, description, url } }) => {
    <Card
        className='shadow'
        border={
            status === 'LEARNED'
                ? 'success'
                : status === 'LEARNING'
                    ? 'warning'
                    : 'danger'
        }

    >
        <Card.Body>
            <Card.Title>
                <Row>
                    <Col>
                        <p className='post-title'></p>
                    </Col>
                </Row>
            </Card.Title>
        </Card.Body>

    </Card>
}
export default SinglePost;