import React from 'react';
import pnfImage from '../assets/pnf.jpg'; // adjust the path if needed

function Pnf() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src={pnfImage}
        alt="Page Not Found"
        style={{
          width: '400px',
          maxWidth: '90%',
          borderRadius: '10px',
          boxShadow: '0 4px 15px rgba(255,255,255,0.2)',
        }}
      />
      <h2
        style={{
          color: 'white',
          marginTop: '20px',
          fontSize: '24px',
          textAlign: 'center',
        }}
      >
        Oops! Page Not Found
      </h2>
    </div>
  );
}

export default Pnf;
