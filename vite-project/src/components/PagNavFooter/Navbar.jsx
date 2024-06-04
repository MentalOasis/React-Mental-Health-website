
import React from 'react';
import mentaloasislogo from '/pic/mentaloasislogo.png';
import './Navbar.css'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "15px" }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#">
          <img loading="lazy" src={mentaloasislogo} width="45" height="" className="d-inline-block align-top me-3" alt="Logo" />
          <span style={{ fontSize: "1em", fontStyle: "italic", color: 'black', fontWeight: 'bold' }} className="fw-semibold centered-text me-3">MENTAL OASIS</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active fw-semibold centered-text" aria-current="page" href="#" style={{ color: 'black', fontWeight: 'bold', paddingRight: '25px' }}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold centered-text" href="#" style={{ color: 'black', fontWeight: 'bold', paddingRight: '25px' }}>Juego SaludMental</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fw-semibold centered-text dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black', fontWeight: 'bold', paddingRight: '25px' }}>Aprendamos</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item fw-semibold" href="#">Como me siento</a></li>
                <li><a className="dropdown-item fw-semibold" href="#">Higiene del sueño</a></li>
                <li><a className="dropdown-item fw-semibold" href="#"> Salud fisica</a></li>
                <li><a className="dropdown-item fw-semibold" href="#"> Tipos de inteligencia </a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold centered-text" href="#" style={{ color: 'black', fontWeight: 'bold', paddingRight: '25px' }}>Consejos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold centered-text" href="#" style={{ color: 'black', fontWeight: 'bold' }}>Sobre Nosotras</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link btn btn-outline-success rounded-pill me-2 btn-invitado" style={{ width: "100px", fontSize: "15px" }} href="#"><span className="centered-text">Invitado</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-primary rounded-pill btn-registrarse" style={{ width: "100px", fontSize: "15px" }} href="#"><span className="centered-text">Registrarse</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
