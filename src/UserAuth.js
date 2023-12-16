import { Navigate, useLocation } from "react-router-dom";

export const RequireUserauth=({children})=>{
  const getUser=sessionStorage.getItem('userToken');
  const getAdmin=sessionStorage.getItem('adminToken');
  const location=useLocation();  
  if(!getUser){
    return <Navigate to='/' state={{from:location}}/>
  }
  if(!getUser && !getAdmin){
    return <Navigate to='/' state={{from:location}}/>
  }
  return children;
}