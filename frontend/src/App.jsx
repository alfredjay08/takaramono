import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/pages/LoginPage'
import TablePage from './components/pages/TablePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LoginPage /> */}
      <TablePage />
    </>
  )
}

export default App
