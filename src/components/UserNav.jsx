import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit"><Link to={'/userdash'} style={{textDecoration:'none',color:'white'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'white'}}>Help</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white'}}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default UserNav
