import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material'
import axiosInst from '../AxiosInst.js'
import Piechart from './Piecharts.jsx'
import Piecharts from './Maxcount.jsx'
import '../App.css'

const AdminDash = () => {
  const[data, setData]= useState([]);
  const[isVis1, setIsVis1]=useState(false);  
  const[isVis2, setIsVis2]=useState(false); 
  const navigate = useNavigate(); 
  useEffect(()=>{
    axiosInst.post('http://localhost:4000/admin/deets')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
    const timer1=setTimeout(()=>{
      setIsVis1(true);
    },1000);
    const timer2=setTimeout(()=>{
      setIsVis2(true);
    },1500);
    return()=>clearTimeout(timer1,timer2);
  },[]);
  const handleUnreg=(e)=>{e.preventDefault(); navigate('/unreglist');}
  const handleInelig=(e)=>{e.preventDefault(); navigate('/ineliglist');}
// The <h1> element has inline styles applied for centering the text, adding a top margin, and setting the text color to white.
//  The text content of the <h1> is "Welcome,Test Admin".
  return (
    <div style={{marginTop:'3%' , marginLeft:'10%', marginRight:'10%', padding:'0.5% 2.5% 3.5% 2.5%',backgroundColor:'rgb(255,255,255,0.65)', borderRadius:'20px'}} autoComplete="off">
      <Grid container>
        <Grid item lg={8}>
          <Grid item lg={12}>
            <h1 style={{color:'#6c6464', fontSize:'350%'}}>Admin Dashboard</h1>
          </Grid>
          <Grid item lg={12}>
            <h3 style={{color:'#2e2c2f'}} className={isVis1 ? '' : 'text'}>{data.regCount} out of {data.maxCount} eligible candidates have completed their exit test registration. </h3>
            <Button fullWidth onClick={handleUnreg} className={isVis1 ? '' : 'text'} style={{paddingTop:'2.5%',color:'#2e2c2f', backgroundColor:'transparent'}}>View Unregistered</Button> <br />
          </Grid>
          <Grid item lg={12} className={isVis2 ? '' : 'text'} marginTop='8%'>
            <h3 style={{color:'#2e2c2f'}} className={isVis2 ? '' : 'text'}>There are a total of {data.ineligCount} ineligible candidates.</h3>
            <Button fullWidth onClick={handleInelig} style={{paddingTop:'2.5%',color:'#2e2c2f', backgroundColor:'transparent'}}>View Ineligible</Button>
          </Grid>
        </Grid>
        <Grid item lg={4} marginTop='5%'>
          <Grid item lg={12}>
            <Piecharts/>
          </Grid>
          <Grid item lg={12} marginTop='5%'>
            <Piechart/>
          </Grid>
          <Grid item lg={12} textAlign='center' marginTop='5%'><h3 style={{color:'#6c6464', fontStyle:'italic'}}>Registration Statistics</h3></Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDash
