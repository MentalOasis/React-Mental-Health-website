import React from 'react';
import unnamed from '/pic/unnamed.jpg';
import pixelcut from '/pic/pixelcut.png';
import './InicioStyle.css';



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
          <a href="juego/index.html">
            <img src={pixelcut} className="zoom img-fluid custom-size" alt="..." />
          </a>
        </div>

        <div className="text-center mt-3">
          <a className="btn inicio" href="juego/index.html" role="button">Juegos </a>
          <a className="btn inicio" href="comoMeSiento.html" role="button">Emociones  </a>
          <a className="btn inicio" href="aprendamos.html" role="button">Bienestar </a>
          <a className="btn inicio" href="#" role="button">Verdad o Mito </a>
        </div>
     
     </div>
    </div>
  );
}

export default Inicio;