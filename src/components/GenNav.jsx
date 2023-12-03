import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from '../assets/logo192.png'

const GenNav = () => {
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
        <Link href="/">
          <Box
            component="img"
            sx={{ height: 44, marginRight:'10px' }}
            alt="Logo"
            src={logo}
          />
    </Link>
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
