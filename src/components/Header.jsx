import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:"purple"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src="" alt="" />
           
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight:"bold" }}>

              <link to={'/'} style={{textDecoration:"none",color:"blue"}} />
              Resume builder
            </Typography>
            <Button color="inherit">About</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
