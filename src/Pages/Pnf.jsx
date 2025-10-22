import React from 'react';
import pnfImage from '../assets/pnf.jpg'; // adjust the path as needed

function Pnf() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <img
        src={pnfImage}
        alt="Page Not Found"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Pnf;
