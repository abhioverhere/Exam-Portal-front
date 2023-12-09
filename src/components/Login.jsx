import React, { useState } from 'react'
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axiosInst from '../AxiosInst';
import Footer from './Footer.jsx'
import '../css/login.css'

const Login = () => {
// The component uses the useState hook to manage state. It initializes state variables user (for holding email and password) and errors (for handling form validation errors).
  // It uses the useNavigate hook from the react-router-dom library to get a function for navigating to different pages.
  // The inputHandler function is defined to update the user state when the user enters email and password in the login form. It also clears the corresponding error when the user starts typing.
    const [user, setUser] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
    const inputHandler = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
        setErrors({ ...errors, [e.target.name]: '' });
    }
    // The validateLog function is defined to validate the login form. It checks if the email and password are provided and sets errors accordingly.
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
    //The addHandler function is defined to handle the login request using Axios.
    //It checks if the form is valid using validateLog. If valid, it sends a POST request to http://localhost:4000/user/login with the user's credentials.
    //If the login is successful, it sets session storage values based on the user's role (user or admin) and navigates to the corresponding dashboard. 
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
    //If there is an error, it checks the status code. If it's a 401 status (Unauthorized), it alerts the user about invalid credentials and clears the password field. For other errors, it alerts the user about a general error and clears the password field.    
    .catch((error) => {
        if (error.response && error.response.status === 401) {
            alert('Invalid credentials. Please try again.');
            resetFields()
        } else {            
            alert('An error occurred. Please try again later.');
            resetFields()
        }});  
    }}
    // The component renders a UI layout using Material-UI's Grid, TextField, Button, and Typography components.
    // It includes a login form with fields for email and password, a "Log In" button, and an announcements section.
    // The announcements section displays a list of announcements in an unordered list.  
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
    // The component renders a Footer component at the bottom of the page.
  )
}
export default Login
