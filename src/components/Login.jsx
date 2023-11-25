import React, { useState } from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInst from '../AxiosInst';
import '../css/login.css'

const Login = () => {

    const [user, setUser] = useState({ email: '',password: '' });
    const navigate=useNavigate();
    const [errors, setErrors] = useState({});
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
          if (res.data.message === 'Login Success') {
            sessionStorage.setItem("userToken", res.data.token);
            sessionStorage.setItem("userName", res.data.userName);
            sessionStorage.setItem("regStatus", res.data.regStatus);
            if (user.email === 'admin@gmail.com') {
              navigate('/admindash');
            } else {
              navigate('/userdash');
            }
        }
    })
    
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            alert('Invalid credentials. Please try again.');
            setUser({ email: '', password: '' });
        } else {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
            setUser({ email: '', password: '' });
        }});
        console.log(user)
    }}
        
  return (
      <Grid container spacing={1} className='log'>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8} className='logger'>
                <div className="announce">
                    <h2>Announcements</h2>                    
                        <ul>
                            <li>Announcement 1</li>
                            <li>Announcement 2</li>
                            <li>Announcement 3</li>
                        </ul>                    
                </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className='logger'>
                <form className='login'>
                  <Typography variant='h3' id='head'>Log In</Typography><br /><br />
                  <TextField label="E-Mail" variant="outlined" onChange={inputHandler} name='email' error={Boolean(errors.email)} helperText={errors.email}/><br /><br />
                  <TextField label="Password" variant="outlined" type="password" onChange={inputHandler} name='password' error={Boolean(errors.password)} helperText={errors.password}/><br /><br />
                  <Button variant='contained' className='logbtn' onClick={addHandler}>Log In</Button>
                </form>
            </Grid>
    </Grid>
  )
}
export default Login
