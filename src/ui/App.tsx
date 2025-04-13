import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useStatistics } from './hooks/useStatistics'
import { Chart } from './Chart'

function App() {
  const [count, setCount] = useState(0)
  const statistics = useStatistics(10);

  const cpuUsages = useMemo(() => statistics.map(stat => stat.cpuUsage), [statistics]);
  const ramUsages = useMemo(() => statistics.map(stat => stat.ramUsage), [statistics]);
  const storageUsages = useMemo(() => statistics.map(stat => stat.storageData), [statistics]);
  
  return (
    <div className='App'> 
      <div style={{ height: 120 }}>
        <Chart data={cpuUsages} maxDataPoints={10} selectedView='CPU' />
        <Chart data={ramUsages} maxDataPoints={10} selectedView='RAM' />
        <Chart data={storageUsages} maxDataPoints={10} selectedView='STORAGE' />
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
