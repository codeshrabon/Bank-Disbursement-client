// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import EditableTable from './Components/EditableTable';
// import TestingEditableTable from './Components/TestingEditableTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './Components/FetchData';
import ShowData from './Components/ShowData';
import EditData from './Components/EditData'
import AddDataForm from './Components/AddDataForm'
import ExampleTest from './Components/ExampleTest';


function App() {
  return(
    <div>
      <div className='text-center'>
      <h1>Bank Disbursement table</h1>
      
      
      {/* <FetchData /> */}
      
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ExampleTest />} /> */}
        <Route path="/" element={<FetchData />} />
        <Route path="/add" element={<AddDataForm />} />

         <Route path="/show/:id" element={<ShowData />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

// export default App

// import FetchData from "./components/FetchData";
//import ShowData from "./components/ShowData";
// import EditData from "./components/EditData";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<FetchData />} />
//         {/* <Route path="/show/:id" element={<ShowData />} />
//         <Route path="/edit/:id" element={<EditData />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
