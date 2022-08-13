import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    
  })
  return (
    <>
      <Form className='my-4'>
        <Form.Group className='mb-2'>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username' 
            required />
        </Form.Group>
        <Form.Group className='mb-2'>
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