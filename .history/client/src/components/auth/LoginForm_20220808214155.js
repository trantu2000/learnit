import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username' r
            equired />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password' required />
        </Form.Group>
        <Button variant='success'
          type='submit'>Login</Button>
      </Form>
      <p>Don't have an account?
        <Link to='/register'>
          <Button variant='info' size='sm' className='ml-2'>Regiter</Button>
        </Link>
      </p>
    </>
  )
}

export default LoginForm