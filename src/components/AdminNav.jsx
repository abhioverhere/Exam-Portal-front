import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from '../assets/logo192.png'

const AdminNav = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  // defines a React component that represents a simple dashboard for a test admin, displaying a welcome message in the center with specific styling.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar>
          <Link href="/">
            <Box
              component="img"
              sx={{ height: 38, marginRight:'10px' }}
              alt="Logo"
              src={logo}
              // It uses Material-UI components (Box, AppBar, Link, Box, Typography, and Button) to create the structure.
            />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/admindash'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}} >Test Admin Portal</Link>
          </Typography>
          <Button color="inherit"><Link to={'/batches'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Batches</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Logout</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default AdminNav
