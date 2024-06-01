
import 'bootstrap-icons/font/bootstrap-icons.css';
import  mentaloasislogo from '/public/pic/mentaloasislogo.png';
import './footer.css'



const Footer = () => {
    return ( 
        
<footer>
  <div className="container-fluid text-start" style={{width: '100%', margin: "0px", padding: "0px"}} >
      <div className="row p-3 bg-secondary text-white" >
          <div className="col mb-3 ">  
              <div className="xhifire-logo text-center">
                  <img src={mentaloasislogo} alt="XHIFIRE2024" className="logo-image" width="100"/>
                  <p className="text-body-secondary mb-0">© <span className="fw-semibold">XHIFIRE2024</span></p>
              </div>
              <p className="mini-paragraph text-center">Siguenos en nuestras Redes Sociales</p>
              <div className="social-icons text-center">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#AC2BAC" , fontSize : "25px" }} >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#791275", fontSize : "25px"  }} >
          <i className="bi bi-google"></i>
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" className="text-dark" style={{ fontSize : "25px" }}  >
          <i className="bi bi-x"></i>
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#60" , fontSize : "25px" }} >
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2", fontSize : "25px"  }} >
          <i className="bi bi-facebook "></i>
        </a>
      </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3 hover-sin-underline">MENÚ RÁPIDO</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">ODS 3</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Salud Mental</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Depresión</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Estrés</a>
              </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3 hover-underline">SOBRE NOSOTRAS</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Nuestra Historia</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Nuestra Misión</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-underline" href="#">Nuestros Valores</a>
              </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
              <p className="h5 mb-3 hover-underline">LÍNEAS DE EMERGENCIA</p>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-sin-underline" href="#">Línea libre para niñas, niños y
                      adolescentes:
                      1515</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-sin-underline" href="#">Whatsapp mujer: +569 9700 7000</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-sin-underline" href="#">Fono infancia: 800 200 188</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-sin-underline" href="#">Fono salud mental: 600 360 7777</a>
              </div>
              <div className="mb-2">
                  <a className="text-white text-decoration-none hover-sin-underline" href="#">SOS: 171</a>
              </div>
          </div>
      </div>
  </div>
</footer>

    
    )
}

export default Footer