
import "./aprendamos.css"
import { Link } from 'react-router-dom';

const Card4 = () => (
  <div className="card">
    <h6 className="card-header"></h6>
    <div className="card-body">
      <div className="row">
        <div className="col-md-2">
          <img src="./pic/Designer (36).jpeg" className="rounded" alt="..." width="180" />
        </div>
        <div className="col-md-8">
          <h6>Bienestar Emocional</h6>
          <h5 className="card-title">Tipos de Inteligencia</h5>
          <p className="card-text">Aprende sobre los diferentes tipos de inteligencia y cómo se relacionan con tu bienestar emocional.</p>
          <Link className=" btn btn-outline-primary rounded-pill btn-aprendamos"  to="/aprendamos/tipos-de-inteligencia"><span className="centered-text" >Explorar</span></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card4;
