import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// componentes
import Footer from './components/PagNavFooter/Footer'
import Navbar from './components/PagNavFooter/Navbar'
// views listas
import ComoMeSiento from './views/ComoMeSiento';
import Plantilla from './views/Plantilla';
import Categorias from './views/admin/Categorias';
import Inteligencia from './views/Inteligencia';
import HigieneSueño from './views/HigSueño';
// views que faltan
import Aprendamos from './views/Aprendamos';
import Consejos from './views/Consejos';
import Emergencia from './views/Emergencia';
import Inicio from './views/InicioHome';
import SaludFisica from './views/SaludFisica';
import SobreNosotras from './views/SobreNosotras';
import TablaNutricion from './views/TablaNutricion';
import InicioStart from './views/InicioHome';


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
      <Route index element={<InicioStart />} /> 

      <Route path="/" element={<Plantilla />}>
          
        {/* debe haber un index o solo se ve la plantilla!!! cuando tengamos inicio lo cambiamos */}
        <Route path="/admin/categorias" element={<Categorias />} />
        <Route path="/aprendamos/tipos-de-inteligencia" element={<Inteligencia />} />
        <Route path="/aprendamos/como-me-siento" element={<ComoMeSiento />} />
        <Route path="/aprendamos/higiene-del-sueño" element={<HigieneSueño />} />
        <Route path="/aprendamos/tabla-nutricion" element={<TablaNutricion />} />
        <Route path="/aprendamos/salud-fisica" element={<SaludFisica />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotras" element={<SobreNosotras />} />
        <Route path="/consejos" element={<Consejos />} />
        <Route path="/aprendamos" element={<Aprendamos />} />
        <Route path="/lineas-de-emergencia" element={<Emergencia />} />
        
        

      </Route>
    </Routes>

  </BrowserRouter>

)

}

export default App
