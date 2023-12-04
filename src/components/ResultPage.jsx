import React, { useEffect, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import axiosInst from '../AxiosInst.js'
import '../css/result.css'

const ResultPage = (props) => {
  const batch = localStorage.getItem('batch');
  const [mailData, setMailData]=useState([{
    recieverMail: props.data ? props.data.recieverMail : '',
    resultLink: props.data ? props.data.resultLink : '',
    textAttach: props.data ? props.data.textAttach : '',
    file: props.data ? props.data.file : []
  }])
  
  const handleChange = (e) => {
    setMailData(prevState=>({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    };
  
  const handleSubmit=(e)=>{
    e.preventDefault();    
    const data = new FormData();
    const files= document.getElementById('resultFile');
    for(let i=0;i<files.files.length;i++){
         data.append('file',files.files[i]);    
    };
    data.append('recieverMail',mailData.recieverMail)
    data.append('resultLink',mailData.resultLink)
    data.append('textAttach',mailData.textAttach)

    axiosInst.post('http://localhost:4000/admin/result',data)
    .then(res=>res.json)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
    console.log(data)
  }
  

  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          <h1 className='mailHead'>E-Mail Results of {batch} batch</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
      </Grid>
      <form>
        <Grid container spacing={2} className='mailer' >
            <Grid item xs={12} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Grid container className='resForm'> 
                  <Grid item xs={12} sm={12} md={12} marginBottom='2.5%'>
                    <TextField
                        fullWidth
                        className="resFormfields"
                        id="outlined-error"
                        label="Recepient E-Mail(s)"
                        variant="outlined"
                        name="recieverMail"
                        value={mailData.recieverMail}
                        onChange={handleChange}
                        // error={Boolean(errors.recieverMail)}
                        // helperText={errors.mail}
                        />
                  </Grid> 
                  <Grid item xs={6} sm={6} md={6} marginBottom='2.5%'>
                    <TextField
                        fullWidth
                        className="resFormfields"
                        id="outlined-error"
                        label="Attachment Link"
                        variant="outlined"
                        name="resultLink"
                        value={mailData.resultLink}
                        onChange={handleChange}
                        />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} marginBottom='2.5%'>
                    <input type='file' id='resultFile' multiple onChange={handleChange}></input>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} marginBottom='2.5%'>
                    <TextField
                        fullWidth
                        className="resFormfields"
                        id="outlined-error"
                        label="Messages/Remarks"
                        variant="outlined"
                        name="textAttach"
                        multiline
                        rows={4}
                        value={mailData.textAttach}
                        onChange={handleChange}
                        />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}></Grid>  
                  <Grid item xs={12} sm={4} md={4}>
                    <Button variant="contained" className='mailBtn' style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} fullWidth onClick={handleSubmit}>Send E-Mail</Button>
                  </Grid> 
                  <Grid item xs={12} sm={4} md={4}></Grid>                    
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2} md={2}></Grid>            
        </Grid>        
        
      </form>      
    </div>
  )
}

export default ResultPage
