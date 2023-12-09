import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from '../assets/logo192.png'
// uses the styled utility from a styling library to create a styled Toolbar component.
const GenNav = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
      // The styles specified include centering the items and setting a minimum height of 75 pixels when the screen size is "all" 
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar>
        <Link href="/">
          <Box
            component="img"
            sx={{ height: 44, marginRight:'10px' }}
            alt="Logo"
            src={logo}
            // It uses Material-UI components (Box, AppBar, Link, Box, Typography, and Button) to create the structure.
          />
    </Link>
    {/* A Typography component displaying the text "ICT Exam Portal"  */}
    {/* A Button component containing a Link to an external URL (https://retail.ictkerala.org/) with the label "Paatshala" */}
          <Typography variant="h5" component="div" className='genAppHead' sx={{ flexGrow: 1, color:'white' }} style={{fontFamily:'serif'}}>
           ICT Exam Portal
          </Typography>
          <Button color="inherit"><Link to='https://retail.ictkerala.org/' style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Paatshala</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default GenNav
