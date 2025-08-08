
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchData from './Components/FetchData';
import ShowData from './Components/ShowData';
import EditData from './Components/EditData'
import AddDataForm from './Components/AddDataForm'


function App() {
  return(
    <div className='p-3 mb-2 bg-secondary text-white'>
      <div className='text-center'>
      <h1>Bank Disbursement table</h1>
      
      <BrowserRouter>
      <Routes>
        
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

export default App;
