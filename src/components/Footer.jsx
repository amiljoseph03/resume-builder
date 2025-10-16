import React from 'react'

function Footer() {
  return (
    <div>
      <footer
        style={{
          backgroundColor: 'purple',
          color: 'white',
          textAlign: 'center',
          padding: '1rem 0',
          position: 'fixed',
          bottom: 0,
          width: '100%',

          overflowY: 'auto',
        }}
      >
        <h3>Contact us</h3>
        <p>resumebuilder@gmail.com</p>
        <p>7902514737</p>
        <h3>Connect with us</h3>
        <div style={{ fontSize: '1.5rem' }}>
          <i className="fa-brands fa-whatsapp" style={{ margin: '0 10px' }}></i>
          <i className="fa-brands fa-instagram"style={{ margin: '0 10px' }}></i>
          <i className="fa-brands fa-linkedin" style={{ margin: '0 10px' }}></i>
        </div>

        <p>© {new Date().getFullYear()} ResumeBuilder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer

