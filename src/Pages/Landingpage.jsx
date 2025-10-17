import { Button } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom';
import './Landingpage.css'



function Landingpage() {
  return (
    <div>
      {/* <h1>landing</h1> */}
      <section id="bg1">
        <div className="row pt-5">
          <div className="col-12 col-md-4"> </div>

          <div className="col-12 col-md=4 box py-5 border rounded mt-5 text-center">
            <h3>Designed to get hired</h3>
            <h4>yor skills, your story</h4>

            <Link to={'/resume-generator'}>
              <button sx={{ backgrondColor: 'brown' }} varient="contained">
                {' '}
                make your resume
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-5">
        <h3 className="text-center">Tools</h3>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write professional cover letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>applications</h4>
            <p>
              Effortlessly manage and track your job applications in an
              organized manner.
            </p>
          </div>

          <div className='col-12 col-md-6'>
            <img src="" alt="" width={'70%'}/>
          </div>
        </div>
      </section>

      <section id='bg2'></section>

      <section></section>
    </div>
  );
}

export default Landingpage
