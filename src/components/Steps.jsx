// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function Steps() {
// export default function HorizontalLinearStepper() {
//   const steps = [
//     'Basic INformation',
//     'Contact Detials',
//     'Work experience',
//     'Educatoon detials',
//     'Skills and Certification',
//     'Review & Submit',
//   ];


//   const [activeStep, setActiveStep] = React.useState(0);
//   const [skipped, setSkipped] = React.useState(new Set());

  
//   const isStepOptional = (step) => {
//     return step === 1;
//   };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

  
//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };


//   return (
//     <div>
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep}>
//           {steps.map((label, index) => {
//             const stepProps: { completed?: boolean } = {};
//             const labelProps: {
//               optional?: React.ReactNode,
//             } = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = (
//                 <Typography variant="caption">Optional</Typography>
//               );
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Box sx={{ flex: '1 1 auto' }} />
//               <Button onClick={handleReset}>Reset</Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
//                   Skip
//                 </Button>
//               )}
//               <Button onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }
// }
// export default Steps;



import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import TextField from '@mui/material/TextField';
import { RxCross2 } from 'react-icons/rx';




export default function HorizontalLinearStepper() {
  const steps = [
    'Basic Information',
    'Contact Details',
    'Work Experience',
    'Education Details',
    'Skills and Certification',
    'Review & Submit',
  ];



const suggestionSkills=['React','Angular','Node','Angular','Javascript','Git','Express','Tailwind']




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




const renderStepContent=(step)=>{
  switch(step){
    case 0: return (
      <div>
        <h3>personal detials</h3>
        <div className="d-flex row p-3">
          <TextField id="standard-basic" label="job title" variant="standard" />
          <TextField id="standard-basic" label="job title" variant="standard" />
        </div>
      </div>
    );
    case 1: return (
      <div>
        <h3>Contact detials</h3>
        <div className="d-flex row p-3">
          <TextField id="standard-basic" label="email" variant="standard" />
          <TextField id="standard-basic" label="phone" variant="standard" />
          <TextField id="standard-basic" label="github" variant="standard" />
          <TextField id="standard-basic" label="linkedin" variant="standard" />
          <TextField id="standard-basic" label="portfolio" variant="standard" />
        </div>
      </div>
    );

    case 2: return (
      <div>
        <h3>Educational detials</h3>
        <div className="d-flex row p-3">
          <TextField id="standard-basic" label="course" variant="standard" />
          <TextField id="standard-basic" label="college" variant="standard" />
          <TextField id="standard-basic" label="university" variant="standard" />
          <TextField id="standard-basic" label="year of passout" variant="standard" />
        </div>
      </div>
    );

    case 3 : return (
      <div>
        <h3>Professional detials</h3>
        <div className="d-flex row p-3">
          <TextField id="standard-basic" label="job or internship" variant="standard" />
          <TextField id="standard-basic" label="company name" variant="standard" />
          <TextField id="standard-basic" label="location" variant="standard" />
          <TextField id="standard-basic" label="duration" variant="standard" />
        
        </div>
      </div>
    );

    case 4: return (
      <div>
        <h3>skills</h3>
        <Box sx={{ width: '100%' }}>
          <Stack
            spacing={2}
            direction="row"
            sx={{ padding: '10px', gap: '10px', flexWrap: 'wrap' }}
          >
            <Button variant="contained">Contained</Button>
          </Stack>

          <div>
            <h5>Suggestions : </h5>

            <div className="d-flex justify-content-between">
              {suggestionSkills.map((skills) => (
                // <Button varient='outlined'>{skills}</Button>
                <Button variant="outlined">{skills}</Button>
              ))}
            </div>
          </div>
          <div>
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
          </div>
        </Box>
      </div>
    );

    case 5 : return (
      <div>
        <h3>Professional Summary</h3>
        <div className="d-flex row p-3">
         
          <TextField id="standard-multiline-static"
           label="write a short summary"
           multiline
           rows={4}
           defaultValue="EG: I M A PASSIONATE............"
            variant="standard"
            VALUE="" />
        
        </div>
      </div>
    );

    default : return Null
  }
}





















  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}; // ✅ simple JS object
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
            All steps completed — you&apos;re finished!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
           
           <Box>
            {renderStepContent(activeStep)}
           </Box>
           
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
