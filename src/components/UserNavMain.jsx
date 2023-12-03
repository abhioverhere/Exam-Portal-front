import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const UserNavMain = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:'serif'}}>ICT Exam Portal</Typography>          
          <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Help</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Logout</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default UserNavMain
