import React from 'react';
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
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  overflowY: 'auto',
};

function Edit({ resumeId }) {
  console.log(resumeId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userInput, setUserInput] = React.useState({});

  // get data for edit
  const getEditResumeDetails = async () => {
    try {
      const result = await getResumeAPI(resumeId);
      console.log(result)
      setUserInput(result?.data)
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    resumeId && getEditResumeDetails();
  }, [resumeId]);

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
                label="Full Name"
                variant="standard"
                //retrive input data
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      name: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.name}
              />

              <TextField
                label="Job Title"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      jobTitle: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.jobTitle}
              />
              <TextField
                label="location"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,

                    personalDetails: {
                      ...userInput.personalDetails,
                      location: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.location}
              />
            </div>

            <h3>Contact detials</h3>
            <div className="d-flex row p-3">
              <TextField
                label="Email"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      email: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.email}
              />
              <TextField
                label="Phone"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      phone: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.phone}
              />
              <TextField
                label="GitHub"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      github: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.github}
              />
              <TextField
                label="LinkedIn"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      linkedin: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.linkedin}
              />
              <TextField
                label="Portfolio"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      portfolio: e.target.value,
                    },
                  })
                }
                value={userInput?.personalDetails?.portfolio}
              />
            </div>

            <h3>Educational detials</h3>
            <div className="d-flex row p-3">
              <TextField
                label="Course"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      course: e.target.value,
                    },
                  })
                }
                value={userInput?.education?.course}
              />
              <TextField
                label="College"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      college: e.target.value,
                    },
                  })
                }
                value={userInput?.education?.college}
              />
              <TextField
                label="University"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      university: e.target.value,
                    },
                  })
                }
                value={userInput?.education?.university}
              />
              <TextField
                label="Year of Passout"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      year: e.target.value,
                    },
                  })
                }
                value={userInput?.education?.year}
              />
            </div>

            <h3>Professional detials</h3>
            <div className="d-flex row p-3">
              <TextField
                label="Job/Internship"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      job: e.target.value,
                    },
                  })
                }
                value={userInput?.experience?.job}
              />
              <TextField
                label="Company Name"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      company: e.target.value,
                    },
                  })
                }
                value={userInput?.experience?.company}
              />
              <TextField
                label="Location"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      location: e.target.value,
                    },
                  })
                }
                value={userInput?.experience?.location}
              />
              <TextField
                label="Duration"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      duration: e.target.value,
                    },
                  })
                }
                value={userInput?.experience?.duration}
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
              {userInput?.skills?.length > 0 &&
                userInput?.skills.map((skill) => (
                  <span
                    className="btn btn-primary d-flex justify-content-between
                          align-items-center"
                  >
                    {skill}
                    <button className="btn text-light fs-5">
                      <RxCross2 />
                    </button>
                  </span>
                ))}
            </div>

            <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-multiline-static"
                label="Write a short summary"
                multiline
                rows={4}
                // defaultValue="EG: I am a passionate developer..."
                variant="standard"
                // fullWidth
                value={userInput.summary}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    summary: e.target.value,
                  })
                }
              />
            </div>
            <button className=" btn  fs-5">Update</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
