// import React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// // import Link from '@mui/material/Link';
// import { Link } from 'react-router-dom';


// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// import { RiDownloadCloudFill } from 'react-icons/ri';
// import { CiEdit } from 'react-icons/ci';
// import { FaHistory } from 'react-icons/fa';
// import { IoArrowBackCircle } from 'react-icons/io5';



// // import Edit from '.components./Edit';
// import Edit from './Edit';



// function Privew({ userInput ,finish}) {
//   // ✅ Proper destructuring
//   console.log(userInput);

//   return (
//     <div>
//       {userInput.personalDetails.name != '' &&
//         (<div className="flex-column"></div>)(
//           { finish &&<div className="d-flex justify-content-center align-items-center">
//             <button className=" btn text-primary fs-2">
//               <RiDownloadCloudFill />
//             </button>

//             {/* edit  */}

//             <div>
//               <Edit />
//             </div>

//             {/* history  */}
//             <button className=" btn text-primary fs-2">
//               <Link to={'/history '}>
//                 <FaHistory />
//               </Link>
//             </button>

//             {/* back  */}
//             <button className=" btn text-primary fs-2">
//               <Link to={'/resume-generator'}>
//                 <IoArrowBackCircle />
//               </Link>
//             </button>
//           </div>
//         )(
//           <Box style={{ marginTop: '100px' }}>
//             <Paper elevation={5} id="result">
//               <Typography variant="h4" align="center" component="h2">
//                 <h2>Name : {userInput.personalDetails.name} </h2>
//               </Typography>

//               <Typography variant="h4" align="center" color="blue">
//                 <h2>Job title : {userInput.personalDetails.jobTitle} </h2>
//               </Typography>
//               <Typography variant="h4" align="center">
//                 {userInput.personalDetails.email}
//                 {userInput.personalDetails.location}
//                 {userInput.personalDetails.phone}
//               </Typography>
//               <Typography varient="body2" align="center" mb={4}>
//                 <Link href={userInput.personalDetails.github} target="_blank">
//                   Github
//                 </Link>
//                 <Link href={userInput.personalDetails.linkedin} target="_blank">
//                   Linkedin
//                 </Link>
//                 <Link
//                   href={userInput.personalDetails.portfolio}
//                   target="_blank"
//                 >
//                   Portfolio
//                 </Link>
//               </Typography>

//               <Divider>Summary</Divider>

//               <Typography mb={3}>
//                 <p className="text-start">{userInput.summary}</p>
//               </Typography>

//               <Divider>Education</Divider>
//               <h5>{userInput.education.course} </h5>
//               <p>
//                 <span>{userInput.education.college}</span> |
//                 <span>{userInput.education.university}</span>
//                 <span>{userInput.education.year}</span>
//               </p>
//               <Typography variant="h6" align="center"></Typography>

//               <Typography variant="body2" align="center" mb={4}></Typography>

//               <Divider>Professional Experience</Divider>

//               <Typography variant="h6" align="center">
//                 <h5>{userInput.experience.job} </h5>
//                 <p>
//                   <span>{userInput.experience.company}</span> |
//                   <span>{userInput.experience.location}</span>
//                   <span>{userInput.experience.duration}</span>
//                 </p>
//               </Typography>
//               {/* <Typography variant="body2" align="center" mb={4}></Typography> */}

//               <Divider>Skills</Divider>

//               <Stack
//                 spacing={2}
//                 direction="row"
//                 sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
//               >
//                 {userInput.skills.map((skill) => (
//                   <Button variant="contained">{skill}</Button>
//                 ))}
//               </Stack>
//             </Paper>
//           </Box>
//         )}
//     </div>
//       }
//   );
// }

// export default Privew;









import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { RiDownloadCloudFill } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';
import { IoArrowBackCircle } from 'react-icons/io5';

import Edit from './Edit';

function Privew({ userInput, finish }) {
  console.log(userInput);

  // 🧩 Render nothing if no personal details
  if (!userInput.personalDetails.name) {
    return null;
  }

  return (
    <div className="flex-column">
      {/* Buttons shown only when finish = true */}
      {finish && (
        <div className="d-flex justify-content-center align-items-center gap-3 my-3">
          {/* Download Button */}
          <button className="btn text-primary fs-2">
            <RiDownloadCloudFill />
          </button>

          {/* Edit Button */}
          <Edit />

          {/* History Button */}
          <button className="btn text-primary fs-2">
            <Link to="/history">
              <FaHistory />
            </Link>
          </button>

          {/* Back Button */}
          <button className="btn text-primary fs-2">
            <Link to="/resume-generator">
              <IoArrowBackCircle />
            </Link>
          </button>
        </div>
      )}

      {/* Resume Preview */}
      <Box style={{ marginTop: '100px' }}>
        <Paper elevation={5} id="result" className="p-4">
          {/* Personal Details */}
          <Typography variant="h4" align="center" component="h2">
            Name: {userInput.personalDetails.name}
          </Typography>

          <Typography variant="h5" align="center" color="primary">
            Job Title: {userInput.personalDetails.jobTitle}
          </Typography>

          <Typography variant="body1" align="center">
            {userInput.personalDetails.email} |{' '}
            {userInput.personalDetails.location} |{' '}
            {userInput.personalDetails.phone}
          </Typography>

          {/* Links */}
          <Typography variant="body2" align="center" mb={2}>
            <a
              href={userInput.personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              Github
            </a>
            <a
              href={userInput.personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              LinkedIn
            </a>
            <a
              href={userInput.personalDetails.portfolio}
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              Portfolio
            </a>
          </Typography>

          {/* Summary */}
          <Divider>Summary</Divider>
          <Typography mb={3}>
            <p className="text-start">{userInput.summary}</p>
          </Typography>

          {/* Education */}
          <Divider>Education</Divider>
          <h5>{userInput.education.course}</h5>
          <p>
            {userInput.education.college} | {userInput.education.university} |{' '}
            {userInput.education.year}
          </p>

          {/* Experience */}
          <Divider>Professional Experience</Divider>
          <h5>{userInput.experience.job}</h5>
          <p>
            {userInput.experience.company} | {userInput.experience.location} |{' '}
            {userInput.experience.duration}
          </p>

          {/* Skills */}
          <Divider>Skills</Divider>
          <Stack
            spacing={2}
            direction="row"
            sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
          >
            {userInput.skills.map((skill, index) => (
              <Button key={index} variant="contained">
                {skill}
              </Button>
            ))}
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default Privew;

