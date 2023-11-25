import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const GenNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICT Exam Portal
          </Typography>
          <Button color="inherit"><Link to='https://retail.ictkerala.org/' style={{textDecoration:'none', color:'white'}}>Paatshala</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default GenNav
