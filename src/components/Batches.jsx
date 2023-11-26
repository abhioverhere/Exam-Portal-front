import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import'../css/batches.css'

const AdminDash = () => {
  const navigate =useNavigate();
  const handleClick=(batch)=>{
    localStorage.setItem('batch', batch)
    navigate('/list')
  }

  return (
    <Grid className='batches'>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}><h1 className='batchHead'>Batch List</h1></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>          
            <List sx={{ maxHeight:300, bgcolor: 'background.paper', overflow:'auto' }} className='batchlist'>
              <ListItemButton onClick={()=>handleClick('CSA')}>
                <ListItemIcon>o</ListItemIcon>
                <ListItemText>KKEM March CSA</ListItemText>        
              </ListItemButton>
              <ListItemButton onClick={()=>handleClick('DSA')}>
                <ListItemIcon>o</ListItemIcon>
                <ListItemText>KKEM March DSA</ListItemText>        
              </ListItemButton>
              <ListItemButton onClick={()=>handleClick('ML-AI')}>
                <ListItemIcon>o</ListItemIcon>
                <ListItemText>KKEM March ML-AI</ListItemText>        
              </ListItemButton>
              <ListItemButton  onClick={()=>handleClick('FSD')}>
                <ListItemIcon>o</ListItemIcon>
                <ListItemText>KKEM March FSD</ListItemText>        
              </ListItemButton>
              <ListItemButton onClick={()=>handleClick('ST')}>
                <ListItemIcon>o</ListItemIcon>
                <ListItemText>KKEM March ST</ListItemText>        
              </ListItemButton>
            </List>
         
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default AdminDash
