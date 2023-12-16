import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import '../css/userdash.css'

// The component uses the useState hook to initialize three state variables: showtick, showbtn, and display.
// showtick and showbtn are initialized with boolean values (false and true respectively).
// display is initialized with an empty string.
const UserDash = () => {
    const[showtick, setShowTick] = useState(false);
    const[showbtn, setShowbtn] = useState(true);
    const[display,setDisplay]=useState('');
    const userName = sessionStorage.getItem('userName');
    const regStatus = sessionStorage.getItem('regStatus');
    const navigate = useNavigate();
    // The useNavigate hook from React Router is used to get the navigate function
    // The checkReg function is defined to check the registration status
    // If the registration status is 'true', it sets the display state to 'Registered', shows a tick (showtick), and hides the registration button (showbtn).

    const checkReg = ()=>{
        if (regStatus === 'true'){
            setDisplay('Registered')
            setShowTick(true)
            setShowbtn(false)
        }else{
            setDisplay('Not Registered') 
            // If the registration status is not 'true', it sets the display state to 'Not Registered'.           
        }

    }
    // The useEffect hook is used to call the checkReg function when the component mounts.
    useEffect(()=>{
        checkReg()
    })
    //  handleClick function is defined to handle the click event on a button.
    //  if the registration status is 'true', it shows an alert indicating that the registration process is already completed.
    //  If the registration status is not 'true', it navigates to the '/regform' route.
    const handleClick=()=>{
        if (regStatus === 'true'){
            alert('You have already completed the registration process');              
        }else{
            navigate('/regform');         
        }
    }
    // this component appears to be a user dashboard that displays a welcome message, information about registration eligibility, and the registration status. 
return (
    <div>
        <div>
          <h3 style={{color:'white'}} className='userWelcome'>Welcome, <br /> {userName} !! </h3>
        </div> 
        <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={4} md={4} className='displayBox'>
                <div className='box' > 
                    <p>You are eligible to register for the exit exam</p><br /><br /><br/>
                    <TaskAltIcon className='tick' sx={{ fontSize:'75px', color:'green' }}/>                   
                </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className='displayBox' >
                <div className='box' id="box2" >
                    <p>REGISTRATION STATUS:<br /><br />{display}</p><br /><br />
                    {showbtn && (
                        <Button variant="contained" style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} onClick={handleClick}>Register Here</Button>
                        )}
                    {showtick && (
                        <TaskAltIcon className='tick' sx={{ fontSize:'75px', color:'green'}}/>
                        )}
                </div> 
            </Grid>
            <Grid item xs={12} sm={2} md={2}></Grid>
        </Grid>
    </div>
  )
}

export default UserDash
