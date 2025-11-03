import React from 'react'
import { FaEdit } from 'react-icons/fa';
import Button from '@mui/material/Button'; 



import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';

import { getResumeAPI } from '../services/allAPI';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:"80vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  overflowY:"auto",
};




function Edit({resumeId}) {
  console.log(resumeId)


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[userInput,setUserInput]=React.useState({})

  // get data for edit
  const getResumeDetails=async()=>{
    try{
      const result = await getResumeAPI(resumeId)

    }catch(err){
      console.log(err)
    }
  }

React.useEffect(()=>{
  resumeId && getResumeDetails()
},[resumeId])

  return (
    <div>
      <Button onClick={handleOpen} className="btn text-primary fs-2">
        <FaEdit />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit detials
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Personal detials</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                label="Full name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="job title"
                variant="standard"
              />
            </div>

            <h3>Contact detials</h3>
            <div className="d-flex row p-3">
              <TextField id="standard-basic" label="Email" variant="standard" />
              <TextField id="standard-basic" label="Phone" variant="standard" />
              <TextField
                id="standard-basic"
                label="github"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="linkedin"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Portfolio"
                variant="standard"
              />
            </div>

            <h3>Educational detials</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                label="course"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="college"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="university"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="year of passout"
                variant="standard"
              />
            </div>

            <h3>Professional detials</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-basic"
                label="job or internship"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="company name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="location"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="duration"
                variant="standard"
              />
            </div>

            {/* skills  */}

            <div spacing={2}>
              <TextField
                label="add skill"
                varient="standard"
                id="standard-basic"
              />
              <Button
                sx={{ maxWidth: '40px' }}
                className="me-3 mt-4"
                variant="text"
              >
                Add{' '}
              </Button>
            </div>

            {/* add skills  */}

            <h5>Added Skills : </h5>

            <div className="d-flex justify-content-between">
              <span
                className="btn btn-primary d-flex justify-content-between
                          align-items-center"
              >
                Skills
                <button className="btn text-light fs-5">
                  <RxCross2 />
                </button>
              </span>
            </div>

            <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-multiline-static"
                label="write a short summary"
                multiline
                rows={4}
                defaultValue="EG: I M A PASSIONATE............"
                variant="standard"
                VALUE=""
              />
            </div>
            <button className=" btn  fs-5">Update</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
