import { useState } from 'react'
import './App.css'
import Footer from './components/PagNavFooter/Footer'
import Navbar from './components/PagNavFooter/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
