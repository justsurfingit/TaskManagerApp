import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Listiter from './components/Listiter'
import './App.css'




function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);
  return (
    <>

    <Listiter/>
    </>
  )
}

export default App
