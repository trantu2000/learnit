import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/authContext';

const LoginForm = () => {
  const {loginUser} = useContext(AuthContext)

  //Router
  // const history = useHistory();

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
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      <Form className='my-4' onSubmit={login}>
        <Form.Group className='mb-2'>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username' 
            required
            value={username} 
            onChange={onChangeLoginForm}
            />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password' 
            required 
            value={password}
            onChange={onChangeLoginForm}
            />
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