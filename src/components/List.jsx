import React, { useEffect, useState } from 'react'
import axiosInst from '../AxiosInst';
import { useNavigate } from 'react-router-dom';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';

const List = () => {
  const[data, setData]= useState([]); 
  const navigate= useNavigate()
  const batch = localStorage.getItem('batch');
  console.log(batch)
  useEffect(()=>{
    axiosInst.post(`http://localhost:4000/user/batch/${batch}`)
    .then(res=>setData(res.data))    
    .catch(err=>console.log(err))}); 

    const upload = ()=>{
      navigate('/upload')
    }

  return (
    <Grid>
      <Grid container>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <h1 className='contHead'>Registered Candidates of {batch}</h1>        
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
          <div className="result">
            <Button onClick={upload} >Upload Result</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <TableContainer component={Paper} align='center' aria-label="simple table" sx={{ margin:'2% 15%', maxHeight:'350px', maxWidth:'70%' }}>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell align="center" className='tableCell'>Name</TableCell>
                <TableCell align="center" className='tableCell'>E Mail</TableCell>
                <TableCell align="center" className='tableCell'>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val,i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" className='tableCell'>{val.firstName}{' '}{val.lastName}</TableCell>
                  <TableCell align="center" className='tableCell' style={{fontStyle:'italic'}}>{val.formMail}</TableCell>
                  <TableCell align="center" className='tableCell'>{val.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default List
