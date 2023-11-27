import React, { useState } from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInst from '../AxiosInst';
import '../css/login.css'

const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
    const inputHandler = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        setErrors({ ...errors, [e.target.name]: '' });
    }
    
    const validateLog = () => {
        const Err = {};
        if (!user.email.trim()) {
          Err.email = 'Email is required';
        }
        if (!user.password.trim()) {
          Err.password = 'Password is required';
        }
        setErrors(Err);
        return Object.keys(Err).length === 0;
    };
    
    const addHandler=()=>{
        if (validateLog()) {
        axiosInst.post('http://localhost:4000/user/login',user).then((res)=>{
          console.log('Login response:', res.data);
          if (res.data.message === 'success-user') {
            sessionStorage.setItem("userToken", res.data.token);
            sessionStorage.setItem("userName", res.data.userName);
            sessionStorage.setItem("regStatus", res.data.regStatus);        
            navigate('/userdash');            
          }else if(res.data.message === 'success-admin'){
            sessionStorage.setItem("adminToken", res.data.token);
            navigate('/admindash');
          }          
    })    
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            alert('Invalid credentials. Please try again.');
            console.log('Before:', user)
            setUser({ email: ' ', password: ' ' });
            console.log('After:', user)
        } else {            
            alert('An error occurred. Please try again later.');
            console.log('Before:', user)
            setUser({ email: ' ', password: ' ' });   
            console.log('After:', user)
        }});
        
    }}
        
  return (
      <Grid container spacing={2} className='log' direction='row-reverse' alignItems="center" justifyContent="center" marginTop='5.5%' padding={'0% 5% 5% 5%'}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} id='loginGrid'>
                <form className='login'>
                  <Typography variant='h3' id='head'>Log In</Typography><br />
                  <TextField label="E-Mail" variant="outlined" fullWidth onChange={inputHandler} name='email' error={Boolean(errors.email)} helperText={errors.email}/><br /><br />
                  <TextField label="Password" variant="outlined" fullWidth type="password" onChange={inputHandler} name='password' error={Boolean(errors.password)} helperText={errors.password}/><br /><br />
                  <Button variant='contained' className='logbtn' onClick={addHandler}>Log In</Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} alignItems="center" id='announceGrid'>
                <div className="announce">
                    <h2>Announcements</h2>                    
                        <ul>
                            <li>Announcement 1</li>
                            <li>Announcement 2</li>
                            <li>Announcement 3</li>
                            <li>Announcement 4</li>                            
                        </ul>                    
                </div>
            </Grid>
    </Grid>
  )
}
export default Login
