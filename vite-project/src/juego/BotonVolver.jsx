

// src/components/BackButton.jsx
import React from 'react';
import './BotonVolver.css';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <button className="back-button" onClick={() => window.history.back()}>
      <Link className="arrow" to="/">←</Link> Volver
    </button>
  );
};

export default BackButton;

