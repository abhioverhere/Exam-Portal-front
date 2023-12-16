import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material'
import axiosInst from '../AxiosInst.js'
import Piechart from './Piecharts.jsx'
import Piecharts from './Maxcount.jsx'
import '../App.css'
import '../css/admindash.css'

const AdminDash = () => {
  const[data, setData]= useState([]);
  const[isVis1, setIsVis1]=useState(false);  
  const[isVis2, setIsVis2]=useState(false); 
  const navigate = useNavigate(); 
  useEffect(()=>{
    axiosInst.post('/admin/deets') //POST request to access dashboard statistics
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
    const timer1=setTimeout(()=>{ //Timers to set a delay for the values to load
      setIsVis1(true);
    },1750);
    const timer2=setTimeout(()=>{
      setIsVis2(true);
    },1750);
    return()=>clearTimeout(timer1,timer2);
  },[]);
  const handleReg=(e)=>{e.preventDefault(); navigate('/reglist');}
  const handleUnreg=(e)=>{e.preventDefault(); navigate('/unreglist');}
  const handleInelig=(e)=>{e.preventDefault(); navigate('/ineliglist');}
  return (
    <div className='adminDash' style={{marginTop:'2%' , marginLeft:'10%', marginRight:'10%',marginBottom:'0%', padding:'0.5% 2.5% 0.5% 2.5%',backgroundColor:'rgb(255,255,255,0.65)', borderRadius:'20px', animation: 'slide-up 1.5s ease'}} autoComplete="off">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1 className='admin-dash-head' style={{color:'#2e2822'}}>Admin Dashboard</h1>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='admin-dash-body'>
            <h3 style={{color:'#2e2c2f', paddingBottom:'2.5%'}} className={isVis1 ? '' : 'text'}>{data.regCount} out of {data.maxCount} eligible candidates have completed their registration. </h3>
            <Button onClick={handleReg} className={isVis1 ? '' : 'text'} fullWidth style={{color:'white', borderRadius:'15px', backgroundColor:'#6a5e4f'}}>View All Registered</Button> 
            <Button onClick={handleUnreg} className={isVis1 ? '' : 'text'} fullWidth style={{color:'white', borderRadius:'15px', backgroundColor:'#6a5e4f', marginTop:'4%'}}>View Unregistered</Button> 
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='admin-dash-body' marginTop='8%' marginBottom='8%'>
            <h3 style={{color:'#2e2c2f', paddingBottom:'2.5%'}} className={isVis2 ? '' : 'text'}>There are a total of {data.ineligCount} ineligible candidates.</h3>
            <Button onClick={handleInelig} className={isVis2 ? '' : 'text'} fullWidth style={{color:'white', borderRadius:'15px', backgroundColor:'#6a5e4f'}}>View Ineligible</Button>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={4} xl={4} marginTop='5%'>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Piecharts/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} marginTop='8%'>
            <Piechart/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign='center' marginTop='8%'><h3 style={{color:'#6c6464', fontStyle:'italic'}}>Registration Statistics</h3></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDash
