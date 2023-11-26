import React, { useEffect, useState } from 'react'
import axiosInst from '../AxiosInst';
import { useNavigate } from 'react-router-dom';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../css/list.css'
const List = () => {
  const[data, setData]= useState([]); 
  const navigate= useNavigate()
  const batch = localStorage.getItem('batch');
  useEffect(()=>{
    axiosInst.post(`http://localhost:4000/user/batch/${batch}`)
    .then(res=>setData(res.data))    
    .catch(err=>console.log(err))}); 

    const upload = ()=>{
      navigate('/upload')
    }

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 className='contHead'>Registered Candidates - {batch}</h1>        
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
          <div className="result">
            <Button onClick={upload} variant="contained" endIcon={<SendIcon />} >Send Result</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <TableContainer component={Paper} stickyHeader align='center' aria-label="simple table" sx={{ margin:'2% 15%', maxHeight:'350px', maxWidth:'70%' }}>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell align="center" className='tableHead'></TableCell>
                <TableCell align="center" className='tableHead'>S.No.</TableCell>
                <TableCell align="center" className='tableHead'>Name</TableCell>
                <TableCell align="center" className='tableHead'>E Mail</TableCell>
                <TableCell align="center" className='tableHead'>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val,i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" className='tableCell'></TableCell>
                  <TableCell align="center" className='tableCell'>{i + 1}</TableCell>
                  <TableCell align="left" className='tableCell'>{val.firstName}{' '}{val.lastName}</TableCell>
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
