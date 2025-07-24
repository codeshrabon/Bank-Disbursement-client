import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EditableTable from './Components/EditableTable';
import TestingEditableTable from './Components/TestingEditableTable';
import FetchData from './Components/FetchData';


function App() {
  return(
    <div>
      <h1>Bank Disbursement edit a table</h1>
      {/* //<button> <EditableTable />Edit Table</button> */}
      {/* <EditableTable />
      <TestingEditableTable />  */}
      
      <FetchData />
    </div>
  );
}

export default App
