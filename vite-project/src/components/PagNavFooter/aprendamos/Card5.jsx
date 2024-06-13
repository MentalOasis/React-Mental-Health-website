
import "./aprendamos.css" 
import { Link } from 'react-router-dom';

const Card5 = () => {
    return (
        
        <div className="card">
        <h6 className="card-header"></h6>
        <div className="card-body">
          <h5 className="card-title">Alimentación Nutritiva: Guía para una Relación Saludable con la Comida y tu Cuerpo</h5>
          <img src="./pic/Designer (81).jpeg" className="rounded float-end" alt="..." width="180" style={{ marginRight: '5px', marginLeft: '25px'}}/>
          <p class="card-text">Aprende consejos prácticos para desarrollar una relación saludable e intuitiva con la comida.
            Explora recursos sobre cómo escuchar las señales de tu cuerpo y tomar decisiones alimentarias conscientes</p>
            <Link className=" btn btn-outline-primary rounded-pill btn-aprendamos" style={{ marginRight: '25px'}}  to="/aprendamos/salud-fisica"><span className="centered-text" >Explorar</span></Link>
            <Link className=" btn btn-outline-primary rounded-pill btn-aprendamos"  to="/aprendamos/tabla-nutricion"><span className="centered-text"> Tabla de Nutrición </span></Link>
        </div>
      </div>


    )
}

export default Card5;