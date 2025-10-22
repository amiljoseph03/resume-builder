// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// // import StepLabel from '@mui/material/StepLabel';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';

// // function Steps() {
// // export default function HorizontalLinearStepper() {
// //   const steps = [
// //     'Basic INformation',
// //     'Contact Detials',
// //     'Work experience',
// //     'Educatoon detials',
// //     'Skills and Certification',
// //     'Review & Submit',
// //   ];

// //   const [activeStep, setActiveStep] = React.useState(0);
// //   const [skipped, setSkipped] = React.useState(new Set());

// //   const isStepOptional = (step) => {
// //     return step === 1;
// //   };

// //   const isStepSkipped = (step) => {
// //     return skipped.has(step);
// //   };

// //   const handleNext = () => {
// //     let newSkipped = skipped;
// //     if (isStepSkipped(activeStep)) {
// //       newSkipped = new Set(newSkipped.values());
// //       newSkipped.delete(activeStep);
// //     }

// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //     setSkipped(newSkipped);
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

// //   const handleSkip = () => {
// //     if (!isStepOptional(activeStep)) {
// //       // You probably want to guard against something like this,
// //       // it should never occur unless someone's actively trying to break something.
// //       throw new Error("You can't skip a step that isn't optional.");
// //     }

// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //     setSkipped((prevSkipped) => {
// //       const newSkipped = new Set(prevSkipped.values());
// //       newSkipped.add(activeStep);
// //       return newSkipped;
// //     });
// //   };

// //   const handleReset = () => {
// //     setActiveStep(0);
// //   };

// //   return (
// //     <div>
// //       <Box sx={{ width: '100%' }}>
// //         <Stepper activeStep={activeStep}>
// //           {steps.map((label, index) => {
// //             const stepProps: { completed?: boolean } = {};
// //             const labelProps: {
// //               optional?: React.ReactNode,
// //             } = {};
// //             if (isStepOptional(index)) {
// //               labelProps.optional = (
// //                 <Typography variant="caption">Optional</Typography>
// //               );
// //             }
// //             if (isStepSkipped(index)) {
// //               stepProps.completed = false;
// //             }
// //             return (
// //               <Step key={label} {...stepProps}>
// //                 <StepLabel {...labelProps}>{label}</StepLabel>
// //               </Step>
// //             );
// //           })}
// //         </Stepper>
// //         {activeStep === steps.length ? (
// //           <React.Fragment>
// //             <Typography sx={{ mt: 2, mb: 1 }}>
// //               All steps completed - you&apos;re finished
// //             </Typography>
// //             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
// //               <Box sx={{ flex: '1 1 auto' }} />
// //               <Button onClick={handleReset}>Reset</Button>
// //             </Box>
// //           </React.Fragment>
// //         ) : (
// //           <React.Fragment>
// //             <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
// //             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
// //               <Button
// //                 color="inherit"
// //                 disabled={activeStep === 0}
// //                 onClick={handleBack}
// //                 sx={{ mr: 1 }}
// //               >
// //                 Back
// //               </Button>
// //               <Box sx={{ flex: '1 1 auto' }} />
// //               {isStepOptional(activeStep) && (
// //                 <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
// //                   Skip
// //                 </Button>
// //               )}
// //               <Button onClick={handleNext}>
// //                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
// //               </Button>
// //             </Box>
// //           </React.Fragment>
// //         )}
// //       </Box>
// //     </div>
// //   );
// // }
// // }
// // export default Steps;

// import React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Stack } from '@mui/material';

// import TextField from '@mui/material/TextField';
// import { RxCross2 } from 'react-icons/rx';

// // export default function HorizontalLinearStepper() {

//   function Steps({userInput,setUserInput}){
//     console.log(userInput)
//   const steps = [
//     'Basic Information',
//     'Contact Details',
//     'Work Experience',
//     'Education Details',
//     'Skills and Certification',
//     'Review & Submit',
//   ];

// const suggestionSkills=['React','Angular','Node','Angular','Javascript','Git','Express','Tailwind']

//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());

//   const isStepOptional = (step) => step === 1;

//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     setActiveStep((prev) => prev + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

// const renderStepContent=(step)=>{
//   switch(step){
//     case 0: return (
//       <div>
//         <h3>personal detials</h3>
//         <div className="d-flex row p-3">
//           <TextField
//             id="standard-basic"
//             label="job title"
//             variant="standard"
//             // geting input data
//             onChange={(e) =>
//               setUserInput({
//                 ...userInput,
//                 personalDetails: {
//                   ...userInput.personalDetails,
//                   name: e.target.value,
//                 },
//               })
//             }
//           />
//           <TextField id="standard-basic" label="job " variant="standard" />
//         </div>
//       </div>
//     );
//     case 1: return (
//       <div>
//         <h3>Contact detials</h3>
//         <div className="d-flex row p-3">
//           <TextField id="standard-basic" label="email" variant="standard" />
//           <TextField id="standard-basic" label="phone" variant="standard" />
//           <TextField id="standard-basic" label="github" variant="standard" />
//           <TextField id="standard-basic" label="linkedin" variant="standard" />
//           <TextField id="standard-basic" label="portfolio" variant="standard" />
//         </div>
//       </div>
//     );

//     case 2: return (
//       <div>
//         <h3>Educational detials</h3>
//         <div className="d-flex row p-3">
//           <TextField id="standard-basic" label="course" variant="standard" />
//           <TextField id="standard-basic" label="college" variant="standard" />
//           <TextField id="standard-basic" label="university" variant="standard" />
//           <TextField id="standard-basic" label="year of passout" variant="standard" />
//         </div>
//       </div>
//     );

//     case 3 : return (
//       <div>
//         <h3>Professional detials</h3>
//         <div className="d-flex row p-3">
//           <TextField id="standard-basic" label="job or internship" variant="standard" />
//           <TextField id="standard-basic" label="company name" variant="standard" />
//           <TextField id="standard-basic" label="location" variant="standard" />
//           <TextField id="standard-basic" label="duration" variant="standard" />

//         </div>
//       </div>
//     );

//     case 4: return (
//       <div>
//         <h3>skills</h3>
//         <Box sx={{ width: '100%' }}>
//           <Stack
//             spacing={2}
//             direction="row"
//             sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
//           >
//             <Button variant="contained">Contained</Button>
//           </Stack>

//           <div>
//             <h5>Suggestions : </h5>

//             <div className="d-flex justify-content-between">
//               {suggestionSkills.map((skills) => (
//                 // <Button varient='outlined'>{skills}</Button>
//                 <Button variant="outlined">{skills}</Button>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h5>Added Skills : </h5>

//             <div className="d-flex justify-content-between">
//               <span
//                 className="btn btn-primary d-flex justify-content-between
//               align-items-center"
//               >
//                 Skills
//                 <button className="btn text-light fs-5">
//                   <RxCross2 />
//                 </button>
//               </span>
//             </div>
//           </div>
//         </Box>
//       </div>
//     );

//     case 5 : return (
//       <div>
//         <h3>Professional Summary</h3>
//         <div className="d-flex row p-3">

//           <TextField id="standard-multiline-static"
//            label="write a short summary"
//            multiline
//            rows={4}
//            defaultValue="EG: I M A PASSIONATE............"
//             variant="standard"
//             value="" />

//         </div>
//       </div>
//     );

//     default : return null
//   }
// }

// export default Steps;

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label, index) => {
//           const stepProps = {}; // ✅ simple JS object
//           const labelProps = {};

//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography variant="caption">Optional</Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }

//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       {activeStep === steps.length ? (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed — you&apos;re finished!
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//             <Box sx={{ flex: '1 1 auto' }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </>
//       ) : (
//         <>
//           <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

//            <Box>
//             {renderStepContent(activeStep)}
//            </Box>

//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
//             {isStepOptional(activeStep) && (
//               <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                 Skip
//               </Button>
//             )}
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </>
//       )}
//     </Box>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';

function Steps({ userInput, setUserInput }) {
  console.log(userInput);

  const steps = [
    'Basic Information',
    'Contact Details',
    'Work Experience',
    'Education Details',
    'Skills and Certification',
    'Review & Submit',
  ];

  const suggestionSkills = [
    'React',
    'Angular',
    'Node',
    'JavaScript',
    'Git',
    'Express',
    'Tailwind',
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  // Step Content Renderer
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
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
                value={userInput.personalDetails.name}
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
                value={userInput.personalDetails.jobTitle}
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
                value={userInput.personalDetails.location}
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
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
                value={userInput.personalDetails.email}
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
                value={userInput.personalDetails.phone}
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
                value={userInput.personalDetails.github}
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
                value={userInput.personalDetails.linkedin}
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
                value={userInput.personalDetails.portfolio}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
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
                value={userInput.education.coures}
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
                value={userInput.education.college}
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
                value={userInput.education.university}
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
                value={userInput.education.year}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3>Professional Details</h3>
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
                value={userInput.experience.job}
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
                value={userInput.experience.company}
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
                value={userInput.experience.location}
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
                value={userInput.experience.duration}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3>Skills</h3>
            <Box sx={{ width: '100%' }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
              >
                <Button variant="contained">Add Skill</Button>
              </Stack>

              <div>
                <h5>Suggestions:</h5>
                <div className="d-flex flex-wrap gap-2">
                  {suggestionSkills.map((skill, index) => (
                    <Button key={index} variant="outlined">
                      {skill}
                    </Button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <h5>Added Skills:</h5>
                <div className="d-flex gap-2 flex-wrap">
                  <span className="btn btn-primary d-flex align-items-center gap-2">
                    Skill Name
                    <button className="btn text-light fs-5 p-0">
                      <RxCross2 />
                    </button>
                  </span>
                </div>
              </div>
            </Box>
          </div>
        );

      case 5:
        return (
          <div>
            <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
              id="standard-multiline-static"
                label="Write a short summary"
                multiline
                rows={4}
                defaultValue="EG: I am a passionate developer..."
                variant="standard"
                fullWidth
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    summary:  e.target.value
                    
                  })
                }
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed — you're finished!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 3, mb: 2 }}>{renderStepContent(activeStep)}</Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Steps;
