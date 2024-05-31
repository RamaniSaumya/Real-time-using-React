import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Com from './Com'
import RealTime from './RealTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <div className='hello'><h1>Namaskar</h1></div>
      <Com />
      <RealTime />
    </div>
  );
  
   
  
}

export default App;
