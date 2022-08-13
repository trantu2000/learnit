import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
    let body

    body = (
        <>
            LearnIt
            {authRoute === 'login' && <LoginForm />}
            {authRoute === 'register' && <RegisterForm />}
        </>
    )
    return (
        <div className="landing">

        </div>
    )
}
export default Auth;