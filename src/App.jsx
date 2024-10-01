import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Land from './Components/Land.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Land/>
    </div>
    </>
  )
}

export default App
