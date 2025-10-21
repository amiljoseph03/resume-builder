import React from 'react'
import { FaEdit } from 'react-icons/fa';
import Button from '@mui/material/Button'; 



import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';







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




function Edit() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            
                   <h3>personal detials</h3>
                   <div className="d-flex row p-3">
                     <TextField id="standard-basic" label="job title" variant="standard" />
                     <TextField id="standard-basic" label="job title" variant="standard" />
                   </div>


                    <h3>Contact detials</h3>
                           <div className="d-flex row p-3">
                             <TextField id="standard-basic" label="email" variant="standard" />
                             <TextField id="standard-basic" label="phone" variant="standard" />
                             <TextField id="standard-basic" label="github" variant="standard" />
                             <TextField id="standard-basic" label="linkedin" variant="standard" />
                             <TextField id="standard-basic" label="portfolio" variant="standard" />
                           </div>



                            <h3>Educational detials</h3>
                                   <div className="d-flex row p-3">
                                     <TextField id="standard-basic" label="course" variant="standard" />
                                     <TextField id="standard-basic" label="college" variant="standard" />
                                     <TextField id="standard-basic" label="university" variant="standard" />
                                     <TextField id="standard-basic" label="year of passout" variant="standard" />
                                   </div>




                                     <h3>Professional detials</h3>
                                           <div className="d-flex row p-3">
                                             <TextField id="standard-basic" label="job or internship" variant="standard" />
                                             <TextField id="standard-basic" label="company name" variant="standard" />
                                             <TextField id="standard-basic" label="location" variant="standard" />
                                             <TextField id="standard-basic" label="duration" variant="standard" />
                                           
                                           </div>
                 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit
