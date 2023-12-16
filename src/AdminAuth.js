import { Navigate, useLocation } from "react-router-dom";

export const RequireAdminauth=({children})=>{
  const getAdmin=sessionStorage.getItem('adminToken');
  const getUser=sessionStorage.getItem('userToken');
  const location=useLocation();  
  if(!getAdmin){
    return <Navigate to='/' state={{from:location}}/>
  }
  if(!getUser && !getAdmin){
    return <Navigate to='/' state={{from:location}}/>
  }
  return children;
}