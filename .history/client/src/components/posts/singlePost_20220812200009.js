import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
const SinglePost = ({post: {_id, status, title, description, url}}) => {
    <Card
    className='shadow'
    
    >
        <Card.Body>
            <Card.Title>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Card.Title>
        </Card.Body>

    </Card>
}
export default SinglePost;