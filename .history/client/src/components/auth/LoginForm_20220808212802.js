import Form from 'react-bootstrap/Form';

const LoginForm = () => {
  return (
    <>
      <Form>
      <Form.Group>
        <Form.Control type='text' placeholder='Username' name='username' required />
      </Form.Group>
      <Form.Group>
        <Form.Control type='password' placeholder='Password' name='password' required />
      </Form.Group>
      </Form>
    </>
  )
}

export default LoginForm