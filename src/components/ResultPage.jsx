import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import axiosInst from '../AxiosInst.js'
import LoaderComp from '../loader.js';
import '../css/result.css'
// It initializes a state variable mailData using the useState hook to manage the form data. This state includes fields like recieverMail, resultLink, textAttach, and file.
const ResultPage = (props) => {
  const batch = localStorage.getItem('batch');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors]=useState({})

// defines a handleChange function to update the state when form inputs change.  
  const [mailData, setMailData]=useState({
    recieverMail: props.data ? props.data.recieverMail : '',
    resultLink: props.data ? props.data.resultLink : '',
    textAttach: props.data ? props.data.textAttach : ''
  })
  
  const handleChange = (e) => {
    setMailData(prevState=>({
      ...prevState,
      [e.target.name]: e.target.value,      
    }));
    setErrors({ ...errors, [e.target.name]: '' });
    };
  
    const validate = () => {
      if(mailData.recieverMail===null){
        resetForm()        
      }else{
        const Err = {};
        if (!mailData.recieverMail.trim()) { Err.recieverMail = 'E-Mail is a required field';}
        else if (!/\S+@\S+\.\S+/.test(mailData.recieverMail)) {Err.recieverMail = 'Invalid E-Mail address';}
        else if (/.*,.*/.test(mailData.recieverMail)) {Err.recieverMail = 'Please only add one e-mail address at a time.';}
        setErrors(Err);
        return Object.keys(Err).length === 0;
      }
  };

  const resetForm =()=>{
    setIsLoading(false)
    setMailData({
      recieverMail: '',
      resultLink: '',
      textAttach: ''
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsLoading(true)
    validate()    
    const toSend={
      ...mailData,
      batch:batch
    }
    if(validate()){
      axiosInst.post('/admin/result',toSend)
      .then(res=>res.data)
      .then(res=>{        
        alert('Email sent successfully')
        resetForm()
      })
      .catch(err=>{         
        console.log(err.response) 
          if(err.response===400){
            alert('Error: Email not Sent')
            resetForm() 
          }else if(err.response===500){
            alert('Email not sent. Please try again later')
            resetForm()
          }else{
            setIsLoading(false)
          }
      });
    }else{
      setIsLoading(false)
    }
  }
  // It renders a form using the Material-UI library components, including TextField for input fields and Button for a submit button.
  // The form includes fields for the recipient email, attachment link, file input for attachments, and a multiline text field for messages/remarks.
  // uses the Material-UI Grid component to create a responsive grid layout for arranging form elements. 
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8}>
          <h1 className='mailHead'>E-Mail Results of {batch}</h1>
        </Grid>
        <Grid item xs={12} sm={4} md={4}></Grid>
      </Grid>
      <form style={{animation: 'zoom-in 1.5s ease'}}>
        <Grid container spacing={2} className='mailer' >
            <Grid item xs={1} sm={2} md={2}></Grid>
            <Grid item xs={10} sm={8} md={8}>
              <Grid container className='resForm'> 
                  <Grid item xs={12} sm={12} md={12} marginBottom='2.5%'>
                    <TextField
                        fullWidth
                        className="resFormfields"
                        id="outlined-error"
                        label="Recepient E-Mail"
                        variant="outlined"
                        name="recieverMail"
                        value={mailData.recieverMail}
                        onChange={handleChange}
                        error={Boolean(errors.recieverMail)}
                        helperText={errors.recieverMail}
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
                        value={mailData.resultLink}
                        onChange={handleChange}
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
                        value={mailData.textAttach}
                        onChange={handleChange}
                        // error={Boolean(errors.recieverMail)}
                        // helperText={errors.mail}
                        />
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}></Grid>  
                  <Grid item xs={12} sm={4} md={4}>
                    <Button variant="contained" className='mailBtn' style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} fullWidth onClick={handleSubmit}>Send E-Mail</Button>
                  </Grid> 
                  <Grid item xs={12} sm={4} md={4} paddingLeft='3%'>
                    {isLoading && (<LoaderComp/>)}
                  </Grid>                    
              </Grid>
            </Grid>
            <Grid item xs={1} sm={2} md={2}></Grid>            
        </Grid>        
        
      </form>      
    </div>
  )
}

export default ResultPage
