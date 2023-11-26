import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavSub = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/admindash'} style={{textDecoration:'none', color:'white'}}>Test Admin Portal</Link>
          </Typography>
          <Button color="inherit"><Link to={'/admindash'} style={{textDecoration:'none', color:'white'}}>Dashboard</Link></Button>
          <Button color="inherit"><Link to={'/batches'} style={{textDecoration:'none', color:'white'}}>Batches</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white'}}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AdminNavSub
