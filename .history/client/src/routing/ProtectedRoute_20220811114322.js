import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

const ProtectedRoute = ({component: Component, ...rest}) => {
    const{
        authState:{authLoading, isAuthenticated}
    } = useContext(AuthContext)

    if (authLoading)
    return <div>
        
    </div>
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute