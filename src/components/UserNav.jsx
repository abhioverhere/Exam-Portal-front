import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Hidden from '@material-ui/core/Hidden';
import Menu from '@mui/material//Menu';
import MenuItem from '@mui/material//MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/logo192.png'
//  uses the styled utility from a styling library (likely Styled Components or Emotion) to create a styled version of the Toolbar component. The styling is defined using the StyledToolbar constant.
const UserNav = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    '@media all': {
      minHeight: 75,
    },
  }));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {setAnchorEl(event.currentTarget);};
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // this component represents a styled navigation bar with a title ("ICT Exam Portal") and three navigation links (Dashboard, Help, Logout). The styling includes a custom background color for the navigation bar and specific styles for text and links.
  // represents a styled navigation bar with a title ("ICT Exam Portal") and three navigation links (Dashboard, Help, Logout). The styling includes a custom background color for the navigation bar and specific styles for text and links.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{backgroundColor:'#9c8a7d'}}>
        <StyledToolbar>        
          <Hidden smDown>  
            <Link href="/">
              <Box
                component="img"
                sx={{ height: 38, marginRight:'10px' }}
                alt="Logo"
                src={logo}              
              />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>
              ICT Exam Portal
            </Typography>
            <Button color="inherit"><Link to={'/userdash'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Dashboard</Link></Button>
            <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'white', fontFamily:'serif'}}>Help</Link></Button>
            <Button color="inherit"><Link to={'/logout'} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>Logout</Link></Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />             
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              sx={{ marginTop:'10%'}}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>
                <Button color="inherit"><Link to={'/userdash'} style={{textDecoration:'none',color:'black'}}>Dashboard</Link></Button>
              </MenuItem>
              <MenuItem>                
                <Button color="inherit"><Link to={'/help'} style={{textDecoration:'none',color:'black'}}>Help</Link></Button>
              </MenuItem>
            </Menu>
            <Link href="/">
            <Box
              component="img"
              sx={{ height: 38, marginRight:'10px' }}
              alt="Logo"
              src={logo}              
            />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textDecoration:'none', color:'white', fontFamily:'serif'}}>
              ICT Exam Portal
          </Typography>
          <Button color="inherit"><Link to={'/logout'} style={{color:'#2e2822', maxHeight:'20px'}}><LogoutIcon/></Link></Button>
          </Hidden>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}

export default UserNav
