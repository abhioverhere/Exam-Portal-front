import { Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo192.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../App.css'

const Footer = () => {
  return (
    <Grid container padding='3% 5% 5% 5%' style={{backgroundColor:'#6c6c65'}}>                
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid container>
                    <Grid item xs={11} sm={11} md={11} lg={6} xl={6} alignItems={'center'}>
                        <Grid container padding='6% 0% 0% 0%' margin='0% 0% 0% 5%'>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}  textAlign='right'>
                                <img src={logo} class='ictLogo' alt='ict-logo-192'/>
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8} margin='0% 0% 0% 0%' paddingLeft='1.5%'>
                                <Typography variant="h5" id='ictTextLogo-up' marginTop='2%'>
                                        INFORMATION & <br />
                                        COMMUNICATION TECHNOLOGY <br />
                                        ACADEMY OF KERALA <br />
                                </Typography>
                                <Typography variant="h5" id='ictTextLogo-low'>ICTAK</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} sm={11} md={12} lg={6} xl={6} padding='2.5%'>
                        
                    </Grid>
                    <Grid container marginTop='3%'>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                            {/* The footer is divided into several sections, each representing a region or category. */}
                            {/* Each section contains contact information for a specific region or purpose, such as head office, central region, north region, and support. */}
                            <Typography variant="h6">
                                <div className="footDivHead">HEAD OFFICE</div>
                                <div className="footDiv">
                                    ICT Academy of Kerala <br />
                                    L-9, Thejaswini Building, <br />
                                    Technopark Campus,<br />
                                    Karyavattom-695581 <br/>
                                    Thrissur, Kerala, India.
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                            <Typography variant="h6">
                                <div className="footDivHead">CENTRAL REGION</div>
                                <div class='footDiv'>Ground Floor,<br />
                                        Rajamally Building, <br />
                                        Infopark, Koratty, <br />
                                        Thrissur, Kerala, India. <br />
                                        Phone: +91-481-2731050
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                            <Typography variant="h6">
                                <div className="footDivHead">NORTH REGION</div>
                                <div class='footDiv'>2nd Floor, <br />
                                        Ul Cyberpark Building, <br />
                                        Nellikode P.O.,
                                        Kozhikode, Kerala, India. <br />
                                        Phone: +91-495-2431432
                                </div>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding='2.5%'>
                            <Typography variant="h6">
                                <div className="footDivHead">SUPPORT</div>
                                <div class='footDiv'>For more details,<br />
                                        Contact us at:<br />
                                        <i>info@ictkerala.org</i>,<br />
                                        Or Give us a call at: <br />
                                        0471-2700811 or -12 or -13
                                </div>
                            </Typography>                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
                     
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign="center" margin='10% 0% 1% 0%'>
                <a href="https://www.linkedin.com/company/ictkerala" target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'white'}}><LinkedInIcon/></a>
                <a href="https://www.facebook.com/ictkerala/" target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'white', paddingLeft:'5%'}}><FacebookIcon/></a>
                <a href="https://www.youtube.com/ictkerala" target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'white', paddingLeft:'5%'}}><YouTubeIcon/></a>
                <a href="https://www.instagram.com/ictkerala" target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'white', paddingLeft:'5%'}}><InstagramIcon/></a>              
            </Grid>          
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} textAlign="center" m>
              <Typography textAlign="center"> Copyright © 2024 ICT Academy of Kerala. All Rights Reserved. </Typography>
            </Grid>          
                   
    </Grid>
  )
}

export default Footer
