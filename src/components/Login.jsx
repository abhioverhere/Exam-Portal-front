import React, { useState } from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInst from '../AxiosInst';
import Footer from './Footer.jsx'
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

    const resetFields=()=>{
      setErrors({})
      setUser({ email: '', password: '' })
    }
    
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
            resetFields()
        } else {            
            alert('An error occurred. Please try again later.');
            resetFields()
        }});  
    }}  
  return (
    <Grid>
      <Grid container  spacing={2} className='log' direction='row-reverse' alignItems="center" justifyContent="center" marginTop='1.5%' padding={'0% 5% 7.5% 5%'}>
            <Grid container className='logSub' direction='row-reverse' alignItems="center" justifyContent="center" marginTop='5.5%' padding={'0% 2% 5% 2%'}>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3} id='loginGrid' textAlign={'center'}>
                  <form className='login'>
                    <Typography variant='h3' id='logHead'>Log In</Typography><br />                
                    <TextField label="E-Mail" 
                        name='email' 
                        variant="filled"
                        autoComplete='off' 
                        color={"primary" }
                        inputProps={{ style: { color: "white" } }}
                        className='logCred' 
                        fullWidth 
                        onChange={inputHandler} 
                        error={Boolean(errors.email)} 
                        helperText={errors.email}/><br /><br />

                    <TextField label="Password" 
                        variant="filled" 
                        type="password" 
                        name='password' 
                        autoComplete='off' 
                        color="primary"
                        inputProps={{ style: { color: "white" } }}
                        className='logCred' 
                        fullWidth 
                        onChange={inputHandler} 
                        error={Boolean(errors.password)} 
                        helperText={errors.password}/><br /><br />

                    <Button variant='contained' className='logbtn' style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} onClick={addHandler}>Log In</Button>
                  </form>
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8} alignItems="center" id='announceGrid'>
                  <div className="announce">
                      <h3>Announcements</h3>                    
                          <ul>
                              <li>Registration window closes on 20/07/2024</li>
                              <li>Exit test dates for FSD-March : 28/07/2024</li>
                              <li>Scheduled Maintenance: 07/07/2024 from 10.00 to 16.00 IST</li>
                          </ul>                    
                  </div>
              </Grid>
            </Grid>            
      </Grid>
      <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center" margin='10% 0% 0% 0%'>
              <Footer/>
          </Grid>
      </Grid>
    </Grid>
  )
}
export default Login
