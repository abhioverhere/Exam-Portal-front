import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Grid, MenuItem, TextField } from '@mui/material'
import axiosInst from '../AxiosInst';
import '../css/userform.css'

// The component uses the useState hook to manage various state variables, including errors, showForm, showMsg, and redirect.
// userInfo and regStatus are retrieved from session storage.
const Form = (props) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [showForm,setShowForm] = useState(false);
    const [showMsg,setShowMsg] = useState(false);
    const [redirect,setRedirect] = useState(false);
    const userInfo = sessionStorage.getItem('userName')
    const regStatus = sessionStorage.getItem('regStatus')
// The loadCheck function is called on component mount.
// If regStatus is 'true', it shows a registration completion message (showMsg) and sets a timer to redirect to the user dashboard after 3 seconds.
// If regStatus is not 'true', it sets showForm to true, displaying the registration form.
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
        firstName: props.data ? props.data.firstName : '',
        middleName: props.data ? props.data.middleName : '',
        lastName: props.data ? props.data.lastName : '',
        phone: props.data ? props.data.phone : '',
        formMail: props.data ? props.data.formMail : '',
        dob: props.data ? props.data.dob : '',
        batch: props.data ? props.data.batch : '',
        gender: props.data ? props.data.gender : '',
    });

    // The validateForm function checks for errors in the form data and sets them in the errors state.
// Error messages are displayed for each form field if validation fails.
    const emptyForm=()=>{
            if(
                formData.firstName===''&&
                formData.lastName===''&&
                formData.phone===''&&
                formData.formMail===''&&
                formData.dob===''&&
                formData.batch===''&&
                formData.gender===''                
                ){
                alert('Empty forms cannot be submitted')
                return false                       
        }
    }

    const validateForm = () => {
      const formErrors = {};
      if (emptyForm()){}
      if (!formData.firstName.trim()) {formErrors.firstName = 'First Name is a required field';}
      else if (!formData.lastName.trim()) {formErrors.lastName = 'Last Name is a required field';}
      else if (!formData.formMail.trim()) { formErrors.formMail = 'E-Mail is a required field';}
      else if (!/\S+@\S+\.\S+/.test(formData.formMail)) {formErrors.formMail = 'Invalid E-Mail address (Check Email format)';}
      else if (!formData.phone.trim()) {formErrors.phone = 'Phone is a required field';}
      else if (!/^\S$/.test(formData.phone)){formErrors.phone = 'Please use Numbers only';}
      else if (!/^\d{1,10}$/.test(formData.phone)){formErrors.phone = 'Invalid Phone Number. Input a 10 digit Mobile number or a 11 digit Landline Number (with 4 digit STD code) with no spaces or breaks. ';}
      else if (!formData.dob.trim()) { formErrors.dob = 'Date of Birth is a required field';}
      else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dob)) {formErrors.dob = 'Please enter in DD/MM/YYYY format';}
      else if (!formData.batch.trim()) {formErrors.batch = 'Please Select your Batch';}
      else if (!formData.gender.trim()) {formErrors.gender = 'Please Select your Gender';}
      
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      });
    };
// The handleSubmit function is called when the user submits the form.
// It validates the form data using validateForm.
// Upon successful submission, it displays an alert and redirects the user to the user dashboard.
    const handleSubmit = (e) => {
      e.preventDefault();
      if(validateForm()){
        sessionStorage.setItem('regStatus', 'true');
        axiosInst.put(`/user/regupdate/${userInfo}`, {})
        // axiosInst.put(`http://localhost:4000/user/regupdate/${userInfo}`, {})
        .then(res=>{})    
        .catch(err=>console.log(err)); 
        axiosInst.post('/user/upload', formData)
        .then((res) =>{
          alert(res.data);
          navigate('/userdash');
        });
      }        
    };
    
// The form includes dropdown menus for selecting the batch and gender.
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
        },
        {   value:'DM',
            label:'KKEM March DM',
        }
    ];
    // Gender options are mapped from another array (genders).    
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
    //The form uses Material-UI components such as Grid, TextField, Button, and MenuItem for styling and user interaction.          
    <div style={{marginTop:'3%' , marginLeft:'10%', marginRight:'10%', padding:'0.5% 2.5% 3.5% 2.5%',backgroundColor:'rgb(255,255,255,0.65)', borderRadius:'20px'}} autoComplete="off">
        {showForm &&(<div className="formHead">
            <h2 style={{color:'#6c6464'}}>Registration Form</h2>
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
                        helperText={errors.firstName}/>
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
                    helperText={errors.batch}
                    error={Boolean(errors.batch)}
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
                        helperText={errors.gender}
                        error={Boolean(errors.gender)}
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

                <Grid item xs={12} sm={4} md={4}>
                   <Button variant="contained" style={{backgroundColor:'#123D6BFF', borderRadius:'15px'}} fullWidth onClick={handleSubmit}>Submit Form</Button>
                </Grid>
            </Grid>
        </form>)}
        {showMsg &&(<div className="redirect">
            <h1 style={{textAlign:'center', color:'#6c6464'}}>You have completed your registration. <br/> Redirecting back to profile page...</h1>
        </div>)}
{/* The form, registration completion message, or redirection message is conditionally rendered based on the state variables (showForm, showMsg, and redirect). */}
    </div>
  )
}

export default Form
