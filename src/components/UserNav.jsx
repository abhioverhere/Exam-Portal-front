import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
//  uses the styled utility from a styling library (likely Styled Components or Emotion) to create a styled version of the Toolbar component. The styling is defined using the StyledToolbar constant.
const UserNav = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  // this component represents a styled navigation bar with a title ("ICT Exam Portal") and three navigation links (Dashboard, Help, Logout). The styling includes a custom background color for the navigation bar and specific styles for text and links.
  // represents a styled navigation bar with a title ("ICT Exam Portal") and three navigation links (Dashboard, Help, Logout). The styling includes a custom background color for the navigation bar and specific styles for text and links.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>ICT Exam Portal</Typography>
          <Button color="inherit"><Link to={'/userdash'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Help</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Logout</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default UserNav
