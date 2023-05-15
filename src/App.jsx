import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap';
import { FaBeer } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
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
      <Button variant="primary">Primary <FaBeer /></Button>{' '}
      <Button variant="secondary">Secondary <FaBeer /></Button>{' '}
      <Button variant="success">Success <FaBeer /></Button>{' '}
      <Button variant="warning">Warning <FaBeer /></Button>{' '}
      <Button variant="danger">Danger <FaBeer /></Button>{' '}
      <Button variant="info">Info <FaBeer /></Button>{' '}
      <Button variant="light">Light <FaBeer /></Button>{' '}
      <Button variant="dark">Dark <FaBeer /></Button> <Button variant="link">Link</Button>
    </>
  )
}

export default App
