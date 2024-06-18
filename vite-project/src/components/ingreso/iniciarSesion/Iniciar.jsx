

import "./inicioSesion.css"
// import "./script.js"

const Iniciar = () => {
  return (
    <div className="container" id="container">
      <div className="form-container registro">
        <form>
          <h1>Crear Cuenta</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>o utiliza tu correo electrónico para registrarte</span>
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button>Registrarse</button>
        </form>
      </div>
      <div className="form-container inicio-sesion">
        <form>
          <h1>Iniciar Sesión</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>o utiliza tu correo electrónico y contraseña</span>
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <a href="#">¿Olvidaste tu Contraseña?</a>
          <button>Iniciar Sesión</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>¡Bienvenidx de nuevo!</h1>
            <p>Ingresa los datos solicitados para la creación de cuenta</p>
            <button className="hidden" id="login">Iniciar Sesión</button>
            <img src="./pic/Designer (9).png" height="140" width="150" alt="Imagen de ejemplo" className="rotate-left" />
          </div>
          <div className="toggle-panel toggle-right">
            <h1>¡Hello Friends!</h1>
            <p>Regístrate para jugar</p>
            <button className="hidden" id="register">Registrarse</button>
            <img src="./pic/Designer (7).png" height="140" width="150" alt="Imagen de ejemplo" className="rotate-left" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iniciar;
