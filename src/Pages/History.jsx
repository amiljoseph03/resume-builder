import React from 'react'

import { MdDelete } from "react-icons/md"
import { Link } from 'react-router-dom';
import { Paper, Button, Box } from '@mui/material';



function History() {
  return (
    <div>
      <h1>Downloaded resume history</h1>
      <Link to={'/'} style={{ marginTop: '-50px' }} className="float-end me-5">
        BACK
      </Link>
      <Box component="section" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
              <div className="d-flex align-items-center justify-content-evenly ">
                <h6>
                  Review At : <br />
                  Item
                </h6>
                <button className='btn text-danger fs-4 ms-5'>
                  <MdDelete />
                </button>
              </div>

              <div className="border rounded p-3">
                <img className='img-fluid' src="" alt="resume" />
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default History
