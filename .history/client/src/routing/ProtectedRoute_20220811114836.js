import { useContext } from "react"
import Spinner from "react-bootstrap/esm/Spinner"
import { Route } from "react-router-dom"
import { AuthContext } from "../contexts/authContext"

const ProtectedRoute = ({component: Component, ...rest}) => {
    const{
        authState:{authLoading, isAuthenticated}
    } = useContext(AuthContext)

    if (authLoading)
    return <div className="spinner-container">
        <Spinner animation="border" variant="info"/>
    </div>
  return (
    <Route {...rest} render={props=> isAuthenticated ? (<>
    <Component {...rest} {...props}/>
    </>)}/>
  )
}

export default ProtectedRoute