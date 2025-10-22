// import React from 'react'
import Privew from '../components/Privew'
import Steps from '../components/Steps'
import React, { useState } from 'react';


function Forms() {



//take and store input data

const[userInput,setUserInput]=useState({
  personalDetails:{
    name:"",
    jobTitle:"",
    location:"",
    email:"",
    phone:"",
    github:"",
    linkedin:"",
    portfolio:""

  },
  education:{
    course:"",
    college:"",
    university:"",
    year:""
  },
  experience:{
    job:"",
    company:"",
    location:"",
    duration:""
  },

  skills:[],
  summary:""
})

  return (
    <div>
      <h1>forms</h1>

      <div className="row">
        <div className="col-3"></div>
        <div className="col-8">
          <Privew />
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row p-5">
        <div className="row p-5">
          <div className="col-6">
            <Steps userInput={userInput} setUserInput={setUserInput} />
            <div className="col-6">{/* <Privew/> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms
