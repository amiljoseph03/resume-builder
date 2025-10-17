import { Button } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom';
import './Landingpage.css'



function Landingpage() {
  return (
    <div>
      <h1>landing</h1>
      <section id="bg1">
        <div className='row pt-5'>
          <div className='col-12 col-md-4'> </div>

          <div className='col-12 col-md=4 box py-5 border rounded mt-5 text-center'>
            <h3>Designed to get hired</h3>
            <h4>yor skills, your story</h4>

            <Link to={'/resume-generator'} >
            <button sx={{ backgrondColor: 'brown'}}
            varient="contained"> make your resume

            </button>
            </Link>

          </div>
 </div>

      </section>
    </div>
  )
}

export default Landingpage
