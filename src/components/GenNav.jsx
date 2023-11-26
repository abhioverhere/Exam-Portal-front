import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const GenNav = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICT Exam Portal
          </Typography>
          <Button color="inherit"><Link to='https://retail.ictkerala.org/' style={{textDecoration:'none', color:'white'}}>Paatshala</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default GenNav
