import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OTPInput from './OTPInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OTPInput />
    </>
  )
}

export default App
