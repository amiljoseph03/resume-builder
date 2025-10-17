// import { useState } from 'react'

// import './App.css'

// import Button from '@mui/material/Button';
// import { FaHome } from 'react-icons/fa';


// import Header from './components/Header';
// import Footer from './components/Footer'

// // import { Route , Routes} from 'react-router-dom'

// import Landingpage from './Pages/Landingpage'
// // import Form from './Pages/Forms'
// import History from './Pages/History'
// import Pnf from './Pages/Pnf'


// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Forms from './Pages/Forms';

// import Resumegenerator from './Pages/Resumegenerator';




// function App() {
 

//   return (
//     <>
//       {/* <h1 className='text-primary' > <FaHome />Resume Builder</h1>
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button> */}

//       <BrowserRouter>
//         <Header />

//         <Routes>
//           <Route path="" element={<Landingpage />} />
//           <Route path="/resume-generator" element={<Resumegenerator />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/*" element={<Pnf />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App




import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route ,Routes} from 'react-router-dom'


import Landingpage from "./Pages/Landingpage"
import Resumegenerator from "./Pages/Resumegenerator"
import Forms from "./Pages/Forms"
import History from "./Pages/History"
import Pnf from "./Pages/Pnf"


function App(){
  return (
    <>
   
        <Header />

        <Routes>
         
          <Route path='' element={<Landingpage />} />

          <Route path="/resume-generator" element={<Resumegenerator />} />
          <Route path="forms" element={<Forms />} />
          <Route path="history" element={<History />} />
          <Route path="/*" element={<Pnf />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App