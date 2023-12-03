import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import '../css/result.css'

const ResultPage = () => {
  const batch = localStorage.getItem('batch');
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
                        // value={mailData.mailId}
                        // onChange={handleChange}
                        // error={Boolean(errors.mailId)}
                        // helperText={errors.mail}
                        />
                  </Grid> 
                  <Grid item xs={12} sm={12} md={12} marginBottom='2.5%'>
                    <TextField
                        fullWidth
                        className="resFormfields"
                        id="outlined-error"
                        label="Attachment Link"
                        variant="outlined"
                        name="resultLink"
                        // value={mailData.link}
                        // onChange={handleChange}
                        // error={Boolean(errors.link)}
                        // helperText={errors.link}
                        />
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
                        // value={mailData.msg}
                        // onChange={handleChange}
                        // error={Boolean(errors.msg)}
                        // helperText={errors.msg}
                        />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}></Grid>  
                  <Grid item xs={12} sm={4} md={4}>
                    <Button variant="contained" color='primary' className='mailBtn' style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} fullWidth>Send E-Mail</Button>
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
