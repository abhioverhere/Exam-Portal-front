import { Navigate } from "react-router-dom"
export const Logout=()=>{
    sessionStorage.removeItem('userToken')
    sessionStorage.removeItem('adminToken')
    return <Navigate to='/' />
}