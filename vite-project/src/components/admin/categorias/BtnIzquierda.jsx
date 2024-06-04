import React from 'react';
import { botones, alerta, alerta1, alerta2, alerta3, alerta4 } from '/src/categoriasR.js';


const BtnIzquierda = () => {
  return (
    <div className="d-flex flex-column align-items-start">
      {botones.map((boton) => (
        <a
          key={boton.id}
          id={boton.id}
          onClick={boton.onClick}
          className="btn btn-outline-secondary m-2 custom-btn-width text-start"
          href={boton.href}
          role="button"
        >
          {boton.texto}
        </a>
      ))}
    </div>
  );
};

export default BtnIzquierda;
