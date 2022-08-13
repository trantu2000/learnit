import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';

const RegisterForm = () => {
    const {registerUser} = useContext(AuthContext)


  //Local sate
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [alert, setAlert] = useState(null)
  const {username, password,confirmPassword} = registerForm
  const onChangeRegisterForm = event => setRegisterForm({...registerForm, [event.target.name]: event.target.value})
  const register= async event =>{
    event.preventDefault()

    try {
      const registerData = await registerUser(registerForm)
      console.log(registerData);
      if(registerData.success){
        //console.log('thanh cong');
        //history.push('/dashboard')
      }else{
        setAlert({type: 'danger', message: registerData.message})
        setTimeout(() => setAlert(null), 3000)
      }
    } catch (error) {
      console.log(error);
    }
    
  }
    return (
        <>
            <Form className='my-4' onSubmit={register}>
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