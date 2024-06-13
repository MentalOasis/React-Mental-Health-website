import "./aprendamos.css"
import { Link } from 'react-router-dom';

const Card2 = () => (
  <div className="col-sm-6">
    <div className="card tarjetas">
      <div className="card-body">
        <h5 className="card-title">Reconocer signos de Estrés - Ansiedad</h5>
        <div className="row">
          <div className="col-sm-6">
            <p className="card-text">Aprenda a identificar signos de estrés en ti misma o en los demás. Descubra formas saludables de afrontar el estrés y la ansiedad.</p>
            <Link className=" btn btn-outline-primary rounded-pill btn-aprendamos"  to="/aprendamos/como-me-siento"><span className="centered-text">Descubre como te sientes</span></Link>
          </div>
          
          <div className="col-sm-6 imagentarjeta">
            <img src="./pic/WhatsApp Image 2024-04-28 at 16.52.08 (2).jpeg" className="rounded" alt="..." width="180" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card2;
