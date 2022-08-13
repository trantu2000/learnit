import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({authRoute}) => {
    let body

    body = (
        
    )
    return(
        <>
            LearnIt
            {authRoute === 'login' && <LoginForm/>}
            {authRoute === 'register' && <RegisterForm/>}
        </>
    )
}
export default Auth;