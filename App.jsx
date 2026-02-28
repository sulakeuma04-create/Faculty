import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faculty from './Components/Faculty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Faculty />
    </>
  )
}

export default App
