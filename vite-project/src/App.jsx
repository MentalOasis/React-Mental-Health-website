import { useState } from 'react'
import './App.css'
import Footer from './components/PagNavFooter/Footer'
import Navbar from './components/PagNavFooter/Navbar'
import ImgAccordion from './components/PagsAprendamos/comoMeSiento/ImgAccordion'
import EmojiChart from './components/PagsAprendamos/comoMeSiento/EmojiChart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ImgAccordion/>
      {/* <EmojiChart/> */}
      <Footer/>
    </>
  )
}

export default App
