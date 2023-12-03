import { Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo192.png'
import '../App.css'

const Footer = () => {
  return (
    <Grid container padding='3% 5% 5% 5%' style={{backgroundColor:'#6c6c65'}}>                
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                    <Typography variant="h6" class='footDivHead'>HEAD OFFICE</Typography>
                    <Typography class='footDiv'>ICT Academy of Kerala <br />
                                L-9, Thejaswini Building, <br />
                                Technopark Campus,<br />
                                Karyavattom-695581
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                    <Typography variant="h6" class='footDivHead'>CENTRAL REGION</Typography>
                    <Typography class='footDiv'>Ground Floor,<br />
                                Rajamally Building, <br />
                                Infopark, Koratty, <br />
                                Thrissur, Kerala, India. <br />
                                Phone: +91-481-2731050
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                    <Typography variant="h6" class='footDivHead'>NORTH REGION</Typography>
                    <Typography class='footDiv'>2nd Floor, <br />
                                Ul Cyberpark Building, <br />
                                Nellikode P.O.,
                                Kozhikode, Kerala, India. <br />
                                Phone: +91-495-2431432
                      </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                    <Typography variant="h6" class='footDivHead'>SUPPORT</Typography>
                    <Typography class='footDiv'>For more details,<br />
                                Contact us at:<br />
                                <i>info@ictkerala.org</i>,<br />
                                Or Give us a call at: <br />
                                0471-2700811 or -12 or -13
                    </Typography>
                </Grid>
                <Grid item xs={11} sm={11} md={11} lg={6} xl={6} alignItems={'center'}>
                    <Grid container spacing={1} padding='5% 0% 0% 0%' margin='0% 0% 0% 5%'>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}  textAlign='right'>
                            <img src={logo} class='ictLogo' alt='ict-logo-192'/>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='0% 0% 0% 0%'>
                            <Typography variant="h5" id='ictTextLogo-up' marginTop='2.5%'>
                                    INFORMATION & <br />
                                    COMMUNICATION TECHNOLOGY <br />
                                    ACADEMY OF KERALA <br />
                            </Typography>
                            <Typography variant="h5" id='ictTextLogo-low'>ICTAK</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={11} sm={11} md={12} lg={6} xl={6} padding='2.5%'>
                    <Typography variant="h6">About Us</Typography>                    
                    <Typography>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improve their employability opportunities in the Industry. The Company is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</Typography>
                </Grid>
            </Grid>
                     
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign="center" margin='10% 0% 1% 0%'>
                  <Typography textAlign="center"> Copyright © 2024 ICT Academy of Kerala. All Rights Reserved. </Typography>
                </Grid>          
                   
    </Grid>
  )
}

export default Footer
