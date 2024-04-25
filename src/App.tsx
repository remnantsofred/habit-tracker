import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Tracker from './components/Tracker/Tracker';
import Form from './components/Form/Form'
import MilestonesPage from './components/MilestonesPage.tsx/MilestonesPage';
export interface IMilestone {
  name: string;
  date: number;
}



export function App() {
  const [page, setPage] = useState(0);


  return (
    <div className='app-page'>
      <h1 className='main-h1'>Ankle Progress</h1>
      <Navbar 
        setPage={setPage}
      />
      <div>
        { page === 0 && <MilestonesPage />}
        { page === 1 && <Tracker />}
        { page === 2 && <Form />}
      </div>
    </div>
  )
}

export default App

