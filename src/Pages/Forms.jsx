// // import React from 'react'
// import Privew from '../components/Privew';
// import Steps from '../components/Steps';
// import React, { useState } from 'react';

// function Forms() {
//   //take and store input data

//   const [userInput, setUserInput] = useState({
//     personalDetails: {
//       name: '',
//       jobTitle: '',
//       location: '',
//       email: '',
//       phone: '',
//       github: '',
//       linkedin: '',
//       portfolio: '',
//     },
//     education: {
//       course: '',
//       college: '',
//       university: '',
//       year: '',
//     },
//     experience: {
//       job: '',
//       company: '',
//       location: '',
//       duration: '',
//     },

//     skills: [],
//     summary: '',
//   });

//   const[finish,setFinish]=useState(false)

//   return (
//     <div>

//       <div className="row">
//         {
//           finish ?
//         <div className="col-3"></div>
//         <div className="col-8">
//           <Privew userInput={userInput} setUserInput={setUserInput} finish={finish} />
//         </div>
//         <div className="col-1"></div>
//       </div> :

//       <div className="row p-5">
//         <div className="row p-5">
//           <div className="col-6">
//             <Steps userInput={userInput} setUserInput={setUserInput}  setFinish={setFinish} />
//             <div className="col-6">{/* <Privew/> */}</div>
//           </div>
//           <div className="col-6">
//             {/* <privew userInput={userInput} /> */}
//             <Privew userInput={userInput} />
//           </div>
//         </div>}
//       </div>
//     </div>
//   );
// }

// export default Forms;
























import React, { useState } from 'react';
import Privew from '../components/Privew';
import Steps from '../components/Steps';

function Forms() {
  const [userInput, setUserInput] = useState({
    personalDetails: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: '',
    },
    education: {
      course: '',
      college: '',
      university: '',
      year: '',
    },
    experience: {
      job: '',
      company: '',
      location: '',
      duration: '',
    },
    skills: [],
    summary: '',
  });

  const [finish, setFinish] = useState(false);

  return (
    <div className="row p-5">
      {finish ? (
        <>
          <div className="col-3"></div>
          <div className="col-8">
            <Privew
              userInput={userInput}
              setUserInput={setUserInput}
              finish={finish}
            />
          </div>
          <div className="col-1"></div>
        </>
      ) : (
        <div className="row p-5">
          <div className="col-6">
            <Steps
              userInput={userInput}
              setUserInput={setUserInput}
              setFinish={setFinish}
            />
          </div>
          <div className="col-6">
            <Privew userInput={userInput} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Forms;
