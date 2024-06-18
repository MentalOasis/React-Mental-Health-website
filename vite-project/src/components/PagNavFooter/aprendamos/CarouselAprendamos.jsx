
import "./aprendamos.css"

const Carousel = () => (
  <div className="card">
    <h5 className="card-header"></h5>
    <div className="card-body">
      <h3 className="card-title">Identifica tu ánimo: Explora tus emociones.</h3>
      <p className="card-text">Viendo imágenes a continuación, reflexiona con cuál te sientes más representada.</p>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/pic/triste.jpg" className="d-block w-50 mx-auto centered-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/pic/alegre.jpg" className="d-block w-50 mx-auto centered-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/pic/seria.jpg" className="d-block w-50 mx-auto centered-img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon color-btn-next " aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next  " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon  color-btn-next " aria-hidden="true"></span>
          <span className="visually-hidden color-btn-next ">Next</span>
        </button>
      </div>
    </div>
  </div>
);

export default Carousel;
