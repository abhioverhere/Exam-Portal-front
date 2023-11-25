import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDash = () => {
    const[status,setStatus]=useState(false);
    const[tick, setTick] = useState(false);
    const[showbtn, setShowbtn] = useState(true);
    const[display,setDisplay]=useState('');
    const userName = sessionStorage.getItem('userName');
    const regStatus = sessionStorage.getItem('regStatus');
    const navigate = useNavigate();

    const checkReg = ()=>{
        if (regStatus === 'true'){
            setStatus(true);
            setDisplay('Registered')
            setShowbtn(false)
            setTick(true)
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
          <h3 style={{fontFamily:'serif',fontSize:'40px'}}>Welcome, {userName} !! </h3>
        </div> 
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <div className='box' > 
                    <p style={{fontSize:'20px',fontFamily:'serif'}}>You are eligible to register for the exit exam</p>
                    <br/>                    
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <div className='box' >
                    <p style={{fontSize:'20px',fontFamily:'serif'}}>REGISTRATION STATUS:</p>
                    <p style={{fontSize:'20px',fontFamily:'serif'}}>{display}</p>
                    {showbtn && (
                        <Button variant="contained" color="primary" onClick={handleClick}>Register Here</Button>
                        )}
                </div> 
            </Grid>
        </Grid>
    </div>
  )
}

export default UserDash
