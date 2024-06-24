import React from 'react';
import unnamed from '/pic/unnamed.jpg';
import pixelcut from '/pic/pixelcut.png';
import './InicioStyle.css';
import { Link } from 'react-router-dom';



const Inicio = () => {
  const bgStyle = {
    backgroundImage: `url(${unnamed})`
  };
  return (
    <div className="bg-image bg-inicio" style={bgStyle}>
      <div className='spacer'></div>
     <div className='main-container'>
        <div className="text-center gradient-text-container" data-text="Mental Oasis">
          <p className="titulo-gradiente mt-4 mb-4">Mental Oasis</p>
        </div>

        <div className="text-center">
          <Link  to="/juego">
            <img src={pixelcut} className="zoom img-fluid custom-size" alt="..." />
          </Link>
        </div>

        <div className="text-center mt-3">
          <Link className="btn inicio"  to="/juego" role="button">Juegos </Link>
          <Link className="btn inicio" to="/aprendamos/como-me-siento" role="button">Emociones  </Link>
          <Link className="btn inicio" to="/consejos" role="button">Bienestar </Link>
          <Link className="btn inicio" to="/aprendamos/tipos-de-inteligencia" style={{ paddingLeft: '5px', paddingRight: '5px', width: '170px'}} role="button">Tipos de Inteligencia </Link>
        </div>
     
     </div>
    </div>
  );
}

export default Inicio;