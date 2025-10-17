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

          <div className="col-12 col-md-6">
            <img src="" alt="" width={'70%'} />
          </div>
        </div>
      </section>

      <section id="bg2"></section>

      <section>
        <div className="row p-5">
          <h3 className="text-center my-3"> Testimony</h3>
          <div className="col-12 col-md-6">
            <h4>Trusted by professionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>

            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster.
            </p>

            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers
              with a résumé that truly stands out.
            </p>
          </div>

          {/* <div className="col-12 col-md-6"></div> */}
        </div>

        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-3">
              <img
                src="https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg"
                alt="" />
            </div>
            <div className="col-3">
              <img
                src="https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg"
                alt="" />
            </div>
            <div className="col-3">
              <img
                src="https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg"
                alt="" />
            </div>
            <div className="col-3">
              <img
                src="https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg"
                alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage
