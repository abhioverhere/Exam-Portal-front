import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import'../css/batches.css'


// used to get the navigation function.
const AdminDash = () => {
  const navigate =useNavigate();
//  function is defined to handle the click event on batch cards.
  const handleClick =(batch)=>{
    localStorage.setItem('batch', batch)
    navigate('/list')
  }
  // An array named items contains batch names ('CSA', 'DSA', 'ML-AI', 'FSD', 'ST', 'Unregistered').
  const items=['CSA','DSA','ML-AI','FSD','ST','DM']
  const batchDisplay= 'KKEM March: '
  
    // Material-UI components such as Grid, Card, CardMedia, CardContent, Typography, and Button are used for layout and displaying batch information.
    // Each card displays the batch name, an image loaded dynamically based on the batch name, and a "Load info" button.
    // The handleClick function is invoked when the "Load info" button is clicked.
  return (
    <Grid className='batches'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}><h1 className='batchHead'>Batch List</h1></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
      </Grid>
      <br /><br />
      <Grid container  >            
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} xl={12} className='batchCards'>
              {items.map((item, index)=> (
              <Grid item xs={11} sm={11} md={4} lg={4} xl={4} textAlign='center'>
                    <Card key={index} style={{marginBottom:'20px'}} onClick={()=>handleClick(item)}>
                      <CardMedia
                          sx={{ height: 140 }}
                          image={require(`../assets/${item}.jpg`)}
                          title={item}/>
                      <CardContent>
                        <Typography>{batchDisplay}{item}</Typography> <br/>                         
                      </CardContent>
                    </Card>                                
              </Grid>))}
          </Grid>
        </Grid>        
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default AdminDash
