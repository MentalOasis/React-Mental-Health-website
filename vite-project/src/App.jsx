import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// componentes
import Footer from './components/PagNavFooter/Footer'
import Navbar from './components/PagNavFooter/Navbar'
import ImgAccordion from './components/PagsAprendamos/comoMeSiento/ImgAccordion'
import EmojiChart from './components/PagsAprendamos/comoMeSiento/EmojiChart'
import Botones from './components/admin/categorias/Botones';
import Accordion2 from './components/PagsAprendamos/tiposInteligencia/Accordion2'
// views listas
import ComoMeSiento from './views/ComoMeSiento';
import Plantilla from './views/Plantilla';
import Categorias from './views/admin/Categorias';
import Inteligencia from './views/Inteligencia';
import HigieneSueño from './views/HigSueño';


function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     {/* <Navbar/> */}
  //     <Composicion/>
  //     {/* <Footer/>   */}
  //     {/* <Categorias/> */}
  //   </>
  // )

return (

  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Plantilla />}>
        <Route index element={<HigieneSueño />} />   
        {/* debe haber un index o solo se ve la plantilla!!!  */}
        <Route path="/admin/categorias" element={<Categorias />} />
        <Route path="/aprendamos/tipos-de-inteligencia" element={<Inteligencia />} />
        <Route path="/aprendamos/como-me-siento" element={<ComoMeSiento />} />
        <Route path="/aprendamos/higiene-del-sueño" element={<HigieneSueño />} />

      </Route>
    </Routes>

  </BrowserRouter>

)

}

export default App
