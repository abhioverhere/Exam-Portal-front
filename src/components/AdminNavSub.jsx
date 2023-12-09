import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const AdminNavSub = () => {
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/admindash'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Test Admin Portal</Link>
          </Typography>
          <Button color="inherit"><Link to={'/admindash'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to={'/batches'} style={{textDecoration:'none', color:'white'}}>Batches</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white'}}>Logout</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default AdminNavSub
