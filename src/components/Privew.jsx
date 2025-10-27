import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { RiDownloadCloudFill } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { FaHistory } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';



// import Edit from '.components./Edit';
import Edit from './Edit';




function Privew(userInput) {
  console.log(userInput)
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button className=" btn text-primary fs-2">
          <RiDownloadCloudFill />
        </button>

        {/* edit  */}

        <div>
          <Edit />
        </div>

        {/* history  */}
        <button className=" btn text-primary fs-2">
          <Link to={'/history '}>
            <FaHistory />
          </Link>
        </button>

        {/* back  */}
        <button className=" btn text-primary fs-2">
          <Link to={'/resume-generator'}>
            <IoArrowBackCircle />
          </Link>
        </button>
      </div>
      {userInput.personalDetials.name != '' && (
        <Box style={{ marginTop: '100px' }}>
          <Paper elevation={5} id="result">
            <Typography variant="h4" align="center" component="h2">
              <h2>Name : {userInput.personalDetials.name} </h2>
            </Typography>

            <Typography variant="h4" align="center" color="blue">
              <h2>Job title : {userInput.personalDetials.jobTitle} </h2>
            </Typography>
            <Typography variant="h4" align="center">
              {userInput.personalDetials.email}
              {userInput.personalDetials.location}
              {userInput.personalDetials.phone}
            </Typography>
            <Typography varient="body2" align="center" mb={4}>
              <Link href={userInput.personalDetials.github} target="_blank">
                Github
              </Link>
              <Link href={userInput.personalDetials.linkedin} target="_blank">
                Linkedin
              </Link>
              <Link href={userInput.personalDetials.portfolio} target="_blank">
                Portfolio
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

            <Stack
              spacing={2}
              direction="row"
              sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
            >
              <Button variant="contained">Contained</Button>
            </Stack>
          </Paper>
        </Box>
      )}
    </div>
  );
}

export default Privew;
