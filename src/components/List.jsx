import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axiosInst from '../AxiosInst';
import '../css/list.css'
// The component uses the useState and useEffect hooks from React.
//  initializes the data state variable with an empty array using useState([]). This state will be used to store data retrieved from an API.
// uses the useNavigate hook from the react-router-dom library to get a function for navigating to different pages.
const List = () => {
  const[data, setData]= useState([]); 
  const navigate= useNavigate()
  const batch = localStorage.getItem('batch');
  // The useEffect hook is used to fetch data when the component mounts. It sends a POST request to http://localhost:4000/admin/batch/${batch} using Axios.
// The retrieved data is then stored in the data state using the setData function.
  useEffect(()=>{
    axiosInst.post(`http://localhost:4000/admin/batch/${batch}`)
    .then(res=>setData(res.data))    
    .catch(err=>console.log(err))});
    const upload = ()=>{
      navigate('/upload')
      // The upload function is defined, which uses the navigate function to navigate to the '/upload' page when called.
    }
    //  component renders a UI layout using Material-UI's Grid, TableContainer, Table, and related components.
   // It displays a heading indicating "Registered Candidates - {batch}" and a button labeled "Send Result" with specific styling.
  //  The main content is a table with headers for "S.No.", "Name", "E Mail", and "Phone".

  return (
    <Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <h1 className='contHead'>Registered Candidates - {batch}</h1>        
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
          <div className="result">
            <Button onClick={upload} style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} variant="contained" endIcon={<SendIcon />} >Send Result</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <TableContainer component={Paper} stickyHeader align='center' aria-label="simple table" sx={{ margin:'2% 15%', maxHeight:'350px', maxWidth:'70%' }}>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell align="center" className='tableHead'>S.No.</TableCell>
                <TableCell align="center" className='tableHead'>Name</TableCell>
                <TableCell align="center" className='tableHead'>E Mail</TableCell>
                <TableCell align="center" className='tableHead'>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val,i) => (
                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center" className='tableCell'>{i + 1}</TableCell>
                  <TableCell align="left" className='tableCell'>{val.firstName}{' '}{val.lastName}</TableCell>
                  <TableCell align="center" className='tableCell' style={{fontStyle:'italic'}}>{val.formMail}</TableCell>
                  <TableCell align="center" className='tableCell'>{val.phone}</TableCell>
                </TableRow>
                // Inline styles and classes are used for styling various elements, such as setting background colors, border radius, and margins.
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default List
