import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Button variant='success' type='submit'></Button>
      </Form>
    </>
  )
}

export default LoginForm