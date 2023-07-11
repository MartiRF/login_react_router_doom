import { useAuth } from "../context/authContext";
import { Navigate } from 'react-router-dom'
export function ProtectedRoute({children}){
    const {user, login} = useAuth();

    // if(login)return <h1>Loadin...</h1>
    if(!user) return <Navigate to='/login'/>
    return <>{children}</>
}