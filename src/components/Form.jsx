import { Button, Grid, MenuItem, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axiosInst from '../AxiosInst';
const Form = (props) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [showForm,setShowForm] = useState(false);
    const [showMsg,setShowMsg] = useState(false);
    const [redirect,setRedirect] = useState(false);
    const userInfo = sessionStorage.getItem('userName')
    const regStatus = sessionStorage.getItem('regStatus')

    const loadCheck = () =>{
        if (regStatus === 'true'){ 
            setShowMsg(true)            
            setTimeout(() => {                
                setRedirect(true);
              }, 3000)            
        }else{                                 
            setShowForm(true)                     
        }
    }
    useEffect(()=>{
        loadCheck()
        if(redirect){navigate('/userdash')}
    })

    const [formData, setFormData] = useState({
        firstName: props.data ? props.data.name : '',
        middleName: props.data ? props.data.middleName : '',
        lastName: props.data ? props.data.lastName : '',
        phone: props.data ? props.data.phone : '',
        formMail: props.data ? props.data.formMail : '',
        dob: props.data ? props.data.dob : '',
        batch: props.data ? props.data.batch : '',
        gender: props.data ? props.data.gender : '',
    });

    const validateForm = () => {
      const formErrors = {};
      if (!formData.firstName.trim()) { formErrors.firstName = 'First Name is a required field';}
      if (!formData.lastName.trim()) { formErrors.lastName = 'Last Name is a required field';}
      if (!formData.phone.trim()) { formErrors.phone = 'Phone is a required field';}
      if (!formData.dob.trim()) { formErrors.dob = 'Date of Birth is a required field';}
      else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dob)) {formErrors.dob = 'Date of Birth is to be entered in DD/MM/YYYY format';}
      if (!formData.formMail.trim()) { formErrors.formMail = 'E-Mail is a required field';}
      else if (!/\S+@\S+\.\S+/.test(formData.formMail)) {formErrors.formMail = 'Invalid E-Mail address';}
      
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(validateForm()){
        sessionStorage.setItem('regStatus', 'true');
        axiosInst.put(`http://localhost:4000/user/regupdate/${userInfo}`, {})
        .then(res=>{})    
        .catch(err=>console.log(err)); 
        axiosInst.post('http://localhost:4000/user/upload', formData)
        .then((res) =>{
          alert(res.data);
          navigate('/userdash');
        });
      }        
    };
    

    const batches=[
        {   value:'CSA',
            label:'KKEM March CSA',
        },
        {   value:'DSA',
            label:'KKEM March DSA',
        },
        {   value:'ML-AI',
            label:'KKEM March ML-AI',
        },
        {   value:'FSD',
            label:'KKEM March FSD',
        },
        {   value:'ST',
            label:'KKEM March ST',
        }
    ];
        
    const genders=[
        {   value:'Male',
            label:'Male',
        },
        {   value:'Female',
            label:'Female',
        },
        {   value:'Other',
            label:'Other',
        },
        {   value:'Prefer not to say',
            label:'Prefer not to say',
        }
    ]
          
return (
              
    <div style={{marginTop:'3%' , marginLeft:'10%', marginRight:'10%'}} autoComplete="off">
        {showForm &&(<div className="formHead">
            <h2>Registration Form</h2>
        </div>)}
        {showForm &&(
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        error={Boolean(errors.firstName)}
                        helperText={errors.name}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="Middle Name (optional)"
                        variant="outlined"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        error={Boolean(errors.lastName)}
                        helperText={errors.lastName}/>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="E-mail"
                        variant="outlined"
                        name="formMail"
                        value={formData.formMail}
                        onChange={handleChange}
                        error={Boolean(errors.formMail)}
                        helperText={errors.formMail}/>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="Phone Number"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        className="formfields"
                        id="outlined-error"
                        label="Date of Birth"
                        variant="outlined"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        error={Boolean(errors.dob)}
                        helperText={errors.dob}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                <TextField
                    id="outlined"
	                className='dropdownbutton'
                    name="batch"
                    select
                    label="Batch"
                    onChange={handleChange}>
                    {batches.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
        </TextField>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        id="outlined"
	                    className='dropdownbutton'
                        name="gender"
                        select
                        label="Gender"
                        onChange={handleChange}>
                        {genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                        ))}
                    </TextField>
                </Grid><br/><br/>

                <Grid item xs={12} sm={4} md={4}></Grid>

                <Grid item xs={12} sm={4} md={4} >
                   <Button variant="contained" color='primary' fullWidth onClick={handleSubmit}>Submit Form</Button>
                </Grid>
            </Grid>
        </form>)}
        {showMsg &&(<div className="redirect">
            <h1>You have already completed your registration. Redirecting back to profile page...</h1>
        </div>)}

    </div>
  )
}

export default Form
