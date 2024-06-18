
import "./aprendamos.css"
import { Link } from 'react-router-dom';

const Card1 = () => (
  <div className="card">
    <h5 className="card-header" style={{ backgroundColor: "#FCE9FD" , }} >¿Cómo te sientes emocionalmente ahora mismo?</h5>
    <div className="card-body">
      <h6 className="card-title">Sintoniza con tu cuerpo y mente! Aprende a reconocer las señales de estrés y ansiedad para poder abordarlas con confianza y calma. Descubre cómo cuidarte y mantenerte en equilibrio en tu día a día.</h6>
      <ul>
      <li className="card-text">Descubre Cómo tu Cuerpo te Habla sobre el Estrés</li>
      <li className="card-text">Aprende a Identificar las Señales de Ansiedad</li>
      <li className="card-text">Trucos para Calmar tu Mente y Recargar tu Energía</li>
      </ul>
      
    </div>
  </div>
);

export default Card1;
