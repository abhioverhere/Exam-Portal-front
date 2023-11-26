import React, { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import '../css/userdash.css'

const UserDash = () => {
    // const[status,setStatus]=useState(false);
    const[showtick, setShowTick] = useState(false);
    const[showbtn, setShowbtn] = useState(true);
    const[display,setDisplay]=useState('');
    const userName = sessionStorage.getItem('userName');
    const regStatus = sessionStorage.getItem('regStatus');
    const navigate = useNavigate();

    const checkReg = ()=>{
        if (regStatus === 'true'){
            // setStatus(true);
            setDisplay('Registered')
            setShowTick(true)
            setShowbtn(false)
        }else{
            setDisplay('Not Registered')            
        }

    }
    useEffect(()=>{
        checkReg()
    })

    const handleClick=()=>{
        if (regStatus === 'true'){
            alert('You have already completed the registration process');              
        }else{
            navigate('/regform');         
        }
    }

return (
    <div>
        <div>
          <h3 style={{fontSize:'40px'}} className='userWelcome'>Welcome, {userName} !! </h3>
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
                <div className='box' >
                    <p>REGISTRATION STATUS:<br /><br />{display}</p><br /><br />
                    {showbtn && (
                        <Button variant="contained" color="primary" onClick={handleClick}>Register Here</Button>
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
