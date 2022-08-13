import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <>
    <Form.Group>
      <Form.Control type='text' placeholder='Username' name='username'/>
    </Form.Group>
    </>
  )
}

export default LoginForm