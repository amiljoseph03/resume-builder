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
          height: '20%',
        }}
      >
        <h3>Contact us</h3>
        <p>resumebuilder@gmail.com</p>
        <p>7902514737</p>
        <h3>Connect with us</h3>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>

        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer

