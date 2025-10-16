import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';



function Header() {

  const intro =
    'A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews.';
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                width="60px"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/approved-cv-3d-icon-png-download-8239694.png"
                alt=""
              />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 'bold' }}
            >
              <Link 
                to={'/'}
                style={{ textDecoration: 'none', color: 'WHITE' }}
              > Resume-builder</Link>
             
            </Typography>

            <Tooltip title={intro}>
              <Button color="inherit">About</Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
