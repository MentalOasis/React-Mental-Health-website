import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// import Footer from './components/PagNavFooter/Footer'
// import Navbar from './components/PagNavFooter/Navbar'
// import ImgAccordion from './components/PagsAprendamos/comoMeSiento/ImgAccordion'
// import EmojiChart from './components/PagsAprendamos/comoMeSiento/EmojiChart'
import ComoMeSiento from './views/ComoMeSiento';
import Plantilla from './views/Plantilla';


function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <Navbar/>
  //     {/* <ImgAccordion/> */}
  //     {/* <EmojiChart/> */}
  //     <ComoMeSiento/>
  //     <Footer/> 
  //   </>
  // )

return (

  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Plantilla />}>
        <Route index element={<ComoMeSiento />} />   
        {/* debe haber un index o solo se ve la plantilla!!! path="/como-me-siento" */}

      </Route>
    </Routes>

  </BrowserRouter>

)

}

export default App
