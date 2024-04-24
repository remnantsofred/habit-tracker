import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Milestone from './components/Milestone'
import Countdown from './components/Countdown/Countdown'
export interface IMilestone {
  name: string;
  date: number;
}

export function App() {
  const [count, setCount] = useState(0);
  const dummyMilestones:IMilestone[] = [
    { name: 'ankle surgery',
      date: 1709244000000,
    },
    { name: '6 weeks post-op',
      date: 1712818800000,
    },
    { name: '12 weeks post-op',
      date: 1716447600000,
    },
    { name: 'Dr. Morshed follow-up appointment 6-weeks post-op',
      date: 1713301200000,
    },
    { name: 'Dr. Morshed follow-up appointment 12-weeks post-op',
      date: 1716330600000,
    },
    { name: 'next PT appointment',
      date: 1714167000000,
    }
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1 className='main-h1'>Ankle Progress</h1>
      <Countdown />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
      </p>
      <div>
        <ul>
          { dummyMilestones.map((milestone)=> 
            { return (<Milestone
                        milestone={ milestone }
                      />
            )}
          )}
        </ul>
      </div>
    </>
  )
}

export default App

