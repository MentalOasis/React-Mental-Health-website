import BtnIzquierda from "./BtnIzquierda.jsx";
import Sidebar from "./Sidebar.jsx";
import { hacerClick, hacerClick2 } from './categoriasR.js';
import './AdminBoton.css'
import { Link } from 'react-router-dom';

const temas = [
  { categoria: "Hábitos Saludables", items: ["Hábitos saludables", "Alimentación", "Ejercicio"] },
  { categoria: "Salud Mental", items: ["Salud mental", "Estrés", "Ansiedad"] },
  { categoria: "Higiene del Sueño", items: ["Higiene del sueño", "Insomnio", "Apnea del sueño"] },
];

const Categorias = () => {
  return (
    <div className="container-fluid" style={{ marginBottom: "60px", marginLeft: "-12px"}}>
      <div className="page-container " >
        <div className="row" >
          <div className="col-md-1">

            {/* <BtnIzquierda /> */}
            <div className= "altura">
            {/* <Sidebar/> */}
            </div>

          </div>
          <div className="col text-start" style={{ marginLeft: "250px" }}>
            <p className="text-right fs-2 fw-bolder" style={{ marginTop: "50px" }}>Temas</p>
            {temas.map((tema, index) => (
              <div key={index}>
                <p className="fs-5 fw-bold mt-5 ">{tema.categoria}</p>
                {tema.items.map((item, idx) => (
                  <div className="row" key={idx}>
                    <p className="fw-normal col mt-3">{item}</p>
                    <div className="col-md-4">
                      <a onClick={hacerClick} className="btn btn-outline-secondary btn-editar m-3 text-center" href="#" role="button">Editar</a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <div className="row mt-5" style={{ marginRight: "250px" }}>
              <div className="d-grid gap-2 col-4 mx-auto mt-5">
                <Link to="/admin/nuevo-tema" className="btn btn-outline-secondary btn-editar btn-largo m-2 text-center" href="#" role="button">Nuevo tema</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;