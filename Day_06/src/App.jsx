import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const handleClick = ()=>{
    alert("Hey I am clicked")
  }
  return (
    <>
     <div className="button">
        <button onClick={handleClick}>Click Me</button>
     </div>
    </>
  )
}

export default App
