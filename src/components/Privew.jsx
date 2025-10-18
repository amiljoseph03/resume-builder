import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

function Privew() {
  return (
    <div>
      <Box>
        <Paper elevation={5} id="result">
          <Typography variant="h4" align="center" component="h2">
            <h2>Name : </h2>
          </Typography>

          <Typography variant="h4" align="center" color="blue">
            <h2>Job title : </h2>
          </Typography>
          <Typography variant="h4" align="center"></Typography>
          <Typography varient="body2" align="center" mb={4}>
            <Link href="" target="_blank">
              Github
            </Link>
            <Link href="" target="_blank">
              Github
            </Link>
            <Link href="" target="_blank">
              Github
            </Link>
            <Link href="" target="_blank">
              Github
            </Link>
          </Typography>

          <Divider>Summary</Divider>

          <Typography mb={3}></Typography>

          <Divider>Education</Divider>
          <Typography variant="h6" align="center"></Typography>

          <Typography variant="body2" align="center" mb={4}></Typography>

          <Divider>Professional Experience</Divider>

          <Typography variant="h6" align="center"></Typography>
          <Typography variant="body2" align="center" mb={4}></Typography>

          <Divider>Skills</Divider>
        </Paper>
      </Box>
    </div>
  );
}

export default Privew;
