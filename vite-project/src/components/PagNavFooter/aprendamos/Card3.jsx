
import "./aprendamos.css"
import { Link } from 'react-router-dom';

const Card3 = () => (
  <div className="col-sm-6">
    <div className="card tarjetas tarjeta2">
      <div className="card-body">
        {/* <h5 className="card-title">La importancia de la autoestima</h5> */}
        <h5 className="card-title">Consejos para mejorar tu higiene del sueño</h5>
        <div className="row">
          <div className="col-sm-6">
            {/* <p className="card-text">Se asocia directamente con una mayor satisfacción con la vida y una menor incidencia de problemas de salud mental, como la depresión y la ansiedad.</p> */}
            <p className="card-text">Aprende a establecer una rutina de sueño saludable para mejorar la calidad de tu descanso. Descubre prácticas efectivas como mantener un horario regular para dormir, crear un ambiente propicio para el sueño y limitar el uso de dispositivos electrónicos antes de acostarte.</p>
            <Link className=" btn btn-outline-primary rounded-pill btn-aprendamos"  to="/aprendamos/higiene-del-sueño"><span className="centered-text">Explorar</span></Link>
         </div>
          <div className="col-sm-6 imagentarjeta">
            <img src="/pic/autoestima.jpeg" className="rounded" alt="..." width="180" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card3;
