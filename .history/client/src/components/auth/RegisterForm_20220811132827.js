import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterForm = () => {
    const {loginUser} = useContext(AuthContext)


  //Local sate
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })
  const [alert, setAlert] = useState(null)
  const {username, password} =loginForm
  const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]: event.target.value})
  const login = async event =>{
    event.preventDefault()

    try {
      const loginData = await loginUser(loginForm)
      console.log(loginData);
      if(loginData.success){
        //console.log('thanh cong');
        //history.push('/dashboard')
      }else{
        setAlert({type: 'danger', message: loginData.message})
        setTimeout(() => setAlert(null), 3000)
      }
    } catch (error) {
      console.log(error);
    }
    
  }
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
                <Form.Group className='mb-2'>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmpassword' required />
                </Form.Group>
                <Button variant='success'
                    type='submit'>Register</Button>
            </Form>
            <p>Already have an account?
                <Link to='/login'>
                    <Button variant='info' size='sm' className='ml-2'>Login</Button>
                </Link>
            </p>
        </>
    )
}

export default RegisterForm