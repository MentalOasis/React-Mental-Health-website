import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap';




// views listas
import ComoMeSiento from './views/ComoMeSiento';
import Plantilla from './views/Plantilla';
import PlantillaAdmin from './views/admin/PlantillaAdmin';
import Inteligencia from './views/Inteligencia';
import HigieneSueño from './views/HigSueño';
import AccountSettings from './components/admin/configuracionCuentaAdm/AccountSettings';
import AdminDashboard  from './components/admin/dashboard/AdminDashBoard';
import AddNewCategoryForm from './components/admin/nuevoTema/AddNewCategoryForm';
import Categorias from './components/admin/categorias/Categorias';
import InicioStart from './views/InicioHome';
import Aprendamos from './views/Aprendamos';
import Consejos from './views/Consejos';
import Emergencia from './views/Emergencia';
import QuestionForm from './components/admin/crearPreguntas/QuestionForm';

// views que faltan

import SaludFisica from './views/SaludFisica';
import SobreNosotras from './views/SobreNosotras';
import TablaNutricion from './views/TablaNutricion';
import GameContainer from './juego/GameContainer';
import Iniciar from './components/ingreso/iniciarSesion/Iniciar';
import Login from './components/admin/Registro/Login';
import Register from './components/admin/Registro/Register';

import { Toaster } from 'react-hot-toast';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;

import ProtectedRoute from './ProtectedRoute';



function App() {
  const [count, setCount] = useState(0)


  return (

    <BrowserRouter>

      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />

      <Routes>
        <Route index element={<InicioStart />} />


        <Route path="/" element={<Plantilla />}>

          <Route path="/aprendamos/tipos-de-inteligencia" element={<Inteligencia />} />
          <Route path="/aprendamos/como-me-siento" element={<ComoMeSiento />} />
          <Route path="/aprendamos/higiene-del-sueño" element={<HigieneSueño />} />
          <Route path="/aprendamos/tabla-nutricion" element={<TablaNutricion />} />
          <Route path="/aprendamos/salud-fisica" element={<SaludFisica />} />
          <Route path="/" element={<InicioStart />} />
          <Route path="/sobre-nosotras" element={<SobreNosotras />} />
          <Route path="/consejos" element={<Consejos />} />
          <Route path="/aprendamos" element={<Aprendamos />} />
          <Route path="/lineas-de-emergencia" element={<Emergencia />} />

        </Route>

        <Route path="/" element={<PlantillaAdmin />}>

          <Route index element={<AdminDashboard />} />
          <Route path="/admin/categorias" element={<Categorias />} />
          <Route path="/admin/nuevo-tema" element={<AddNewCategoryForm />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/configuracion" element={<AccountSettings />} />
          <Route path="/admin/crear-preguntas" element={<QuestionForm />} />

        </Route>
{/* 
        <Route path="/juego" element={<GameContainer />} /> */}
        <Route path="/registrarse" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />

        <Route
          path="/juego"
          element={
            <ProtectedRoute>
              <GameContainer />
            </ProtectedRoute>
          }
        />

       
      </Routes>

    </BrowserRouter>
  )
}

export default App
