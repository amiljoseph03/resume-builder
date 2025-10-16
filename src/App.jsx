import { useState } from 'react'

import './App.css'

import Button from '@mui/material/Button';
import { FaHome } from 'react-icons/fa';

import Header from `components./Header`
import Footer from `components./Footer`



function App() {
 

  return (
    <>
      {/* <h1 className='text-primary' > <FaHome />Resume Builder</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}




      <Header/>
      <Footer/>
    </>
  );
}

export default App
