import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(new Date().toLocaleDateString());
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);
    return()=>clearInterval(interval)
  },[])

  return (
    <>
    <div className='clock-container'>
      <div className='clock-card'>
        <p className='label'>Current Time</p>
        <h2 className='time-display'>{time}</h2>
      </div>
    </div>
    
    </>
  )
}

export default App
