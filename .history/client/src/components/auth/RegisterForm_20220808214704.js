import Form from 'react-bootstrap/Form';

const RegisterForm = () => {
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

export default RegisterForm