import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const ResultPage = () => {
  return (
    <div>
      <form>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                  fullWidth
                  className="resFormfields"
                  id="outlined-error"
                  label="Recepients"
                  variant="outlined"
                  name="recieverMail"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  // error={Boolean(errors.firstName)}
                  // helperText={errors.name}
                  />
            </Grid> 
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                  fullWidth
                  className="resFormfields"
                  id="outlined-error"
                  label="Attachment Link"
                  variant="outlined"
                  name="resultLink"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  // error={Boolean(errors.firstName)}
                  // helperText={errors.name}
                  />
            </Grid> 
            <Grid item xs={12} sm={8} md={8}>
              <TextField
                  fullWidth
                  className="resFormfields"
                  id="outlined-error"
                  label="Messages/Remarks"
                  variant="outlined"
                  name="textAttach"
                  multiline
                  // value={formData.firstName}
                  // onChange={handleChange}
                  // error={Boolean(errors.firstName)}
                  // helperText={errors.name}
                  />
            </Grid> <br />
            <Grid item xs={12} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Button variant="contained" color='primary' >Send E-Mail</Button>
            </Grid>
            <Grid item xs={12} sm={2} md={2}></Grid>
        </Grid>        
        
      </form>      
    </div>
  )
}

export default ResultPage
