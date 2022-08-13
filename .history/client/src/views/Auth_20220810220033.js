import { useContext } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/authContext";
import Spinner from 'react-bootstrap/Spinner';


const Auth = ({ authRoute }) => {
    const {authSate: {authLoading, isAuthenticated}} = useContext(AuthContext)

    let body
    if(authLoading)
    body = (
        <div className="d-flex justify-content-center mt-2">
            <Spinner/>
        </div>
    )


    body = (
        <>
            {authRoute === 'login' && <LoginForm />}
            {authRoute === 'register' && <RegisterForm />}
        </>
    )
    return (
       <div className="landing">
           <div className="dark-overlay">
               <div className="landing-inner">
                    <h1>LearnIt</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
               </div>

           </div>
       </div>
    )
}
export default Auth;