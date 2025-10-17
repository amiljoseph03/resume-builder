import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { LiaFileDownloadSolid } from 'react-icons/lia'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Resumegenerator() {
  return (
    <div>
      
      <div className='row my-5 d-flex justify-content-evenly text-center'>
        <h3 className='text-center my-5'> Create a job winning resume in minutes</h3>
        <div className='col-4 border shaow p-5 text-center'>
          <FaFileAlt className='fs-1 my-3 text-primary'/>

          <h4>Add your information</h4>
          <p>Add pre-written examples to each section</p>
          <h5> Step 1</h5>
        </div>

        <div className='col-4 border shadow p-5 text-center'>
          <LiaFileDownloadSolid className='fs-1 my-3 text-danger'/>
          <h4>Download your resume</h4>
          <p>Download and start applying</p>
          <h5>Step2</h5>

        </div>

        <Link to={'/forms'}>
        <Button sx={{backgroundColor:'blue'}}
        className='my-5' varient="contained"> let's start</Button>
          
          </Link>
      </div>

    </div>
  )
}

export default Resumegenerator
