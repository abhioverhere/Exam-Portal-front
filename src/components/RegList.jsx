import React, { useEffect, useState } from 'react'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axiosInst from '../AxiosInst';
import '../css/list.css'

const List = () => {
  const[data, setData]= useState([]);
  useEffect(()=>{
    axiosInst.post('/admin/othdataw/reg')
    .then(res=>setData(res.data))    
    .catch(err=>console.log(err))});

  return (
    <Grid className='listPage'>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 className='contHead'>All Registered Candidates</h1>        
        </Grid>
      </Grid>
      <Grid container>
        <TableContainer component={Paper} stickyHeader align='center' aria-label="simple table" sx={{ margin:'2% 15%', maxHeight:'350px', maxWidth:'70%' }} style={{ animation: 'fade-in 1.3s ease'}}>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell align="center" className='tableHead'>S.No.</TableCell>
                <TableCell align="center" className='tableHead'>Name</TableCell>
                <TableCell align="center" className='tableHead'>E Mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val,i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" className='tableCell'>{i + 1}</TableCell>
                  <TableCell align="left" className='tableCell'>{val.name}</TableCell>
                  <TableCell align="center" className='tableCell' style={{fontStyle:'italic'}}>{val.email}</TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default List
