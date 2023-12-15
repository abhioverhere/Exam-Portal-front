import { Grid } from '@mui/material'
import React from 'react'

const Help = () => {
  return (
    <div style={{marginTop:'3%' , marginLeft:'10%', marginRight:'10%', padding:'0.5% 2.5% 3.5% 2.5%',backgroundColor:'rgb(255,255,255,0.65)', borderRadius:'20px'}}>
      <Grid container>
        <Grid item sm={12} md={12} lg={12}>
          <h1 className='helpHead' style={{textAlign:'center', color:'#6c6464', fontFamily: 'Georgia, Times New Roman, Times, serif '}}>Instructions about the exam and filling the form</h1>
        </Grid>
        <Grid item sm={12} md={12} lg={12}>        
          <ul>
            <li className='helpBody' style={{color:'#2e2c2f', fontFamily: 'Georgia, Times New Roman, Times, serif ', fontStyle:'italic'}}>
              Please note that no fields are to be left blank with the exception of the ‘Middle Name’ field. 
            </li><br/>
            <li className='helpBody' style={{color:'#2e2c2f', fontFamily: 'Georgia, Times New Roman, Times, serif ', fontStyle:'italic'}}>
              Phone Number: <br/>The phone number should be a 10-digit mobile number or an 11-digit landline number (with a 4-digit STD code) with no spaces or breaks. This is a required field. 
              <br/>Accepted formats: XXXXXXXXXX and XXXXXXXXXXX
            </li><br/>
            <li className='helpBody' style={{color:'#2e2c2f', fontFamily: 'Georgia, Times New Roman, Times, serif ', fontStyle:'italic'}}>
              E-Mail: <br/>
              Enter the e-mail ID used in your interactions with ICT, or add a different e-mail. Please note that entering an alternate e-mail may result in confusions at your end.
              <br/>Accepted formats: example@mail.com , example@mail.text.text
            </li><br/>
            <li className='helpBody' style={{color:'#2e2c2f', fontFamily: 'Georgia, Times New Roman, Times, serif ', fontStyle:'italic'}}>
              Date of Birth: <br/>
              Please enter the date in the DD/MM/YYYY format. 
            </li>
          </ul>
        </Grid>
      </Grid>
      
    </div>
  )
}
// this component represents a help/instructional section for an exam or form. 
  // It includes a heading with specific styling, providing guidance or information about the exam and how to fill out the associated form.
export default Help
