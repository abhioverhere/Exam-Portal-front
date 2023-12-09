import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
// This component represents a simplified version of a navigation bar with a title ("ICT Exam Portal") and two navigation links (Help, Logout). The styling includes a custom background color for the navigation bar and specific styles for text and links.
const UserNavMain = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Includes an AppBar component with a custom style (background color) and a Toolbar component that contains a title and two navigation links. */}
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar> 
          {/*The Typography component is used to display the title "ICT Exam Portal" with a serif font.  */}       
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily:'serif'}}>ICT Exam Portal</Typography> 
          {/* Two Button components are used to create navigation links to '/help' and '/logout'. These links are styled to have white text and a serif font. */}         
          <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Help</Link></Button>
          <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Logout</Link></Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default UserNavMain
