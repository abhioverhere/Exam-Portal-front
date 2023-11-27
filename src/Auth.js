import { Navigate, useLocation } from "react-router-dom";

export const Requireauth=({children})=>{
  const getUser=sessionStorage.getItem('userToken');
  const getAdmin=sessionStorage.getItem('adminToken');
  const location=useLocation();
  if(!getUser && !getAdmin){
    return <Navigate to='/' state={{from:location}}/>
  }
  return children;
}