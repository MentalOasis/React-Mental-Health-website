import React from 'react';
import './SobreNosotras.css'; // Archivo de estilos personalizado

const Nosotras = () => {
    return (
        <div className="card Nosotras-card">
            <div className="card-body">
                <div className="container-nosotras mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="display-4">Sobre Nosotras</h1>
                        </div>
                    </div>
                </div>
                <div className="container-nosotras">
                    <p className="lead">
                        Somos un equipo de estudiantes que participan en un proyecto para abordar
                        los desafíos de la salud mental en adolescentes. Creemos que es fundamental
                        crear conciencia y ofrecer herramientas prácticas para ayudar a los jóvenes
                        a enfrentar estos desafíos de manera positiva.
                    </p>
                </div>

                <div className="container-nosotras mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="display-4">Nuestra Misión</h1>
                        </div>
                    </div>
                </div>
                <div className="container-nosotras">
                    <p className="lead">
                        Nuestra misión es educar, informar y empoderar a los adolescentes para que
                        cuiden su salud mental y busquen ayuda cuando la necesiten. Queremos desafiar
                        estigmas y proporcionar un espacio seguro donde los adolescentes puedan encontrar
                        apoyo y recursos.
                    </p>
                </div>

                <div className="container-nosotras mb-5">
  <div className="row">
    <div className="col-md-3 col-sm-6 mb-4">
      <img src="./pic/Designer (84).jpeg" className="card-img-top img-fluid" alt="..." />
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <img src="./pic/Designer (85).jpeg" className="card-img-top img-fluid" alt="..." />
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <img src="./pic/Designer (87).jpeg" className="card-img-top img-fluid" alt="..." />
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <img src="./pic/Designer (90).jpeg" className="card-img-top img-fluid" alt="..." />
    </div>
  </div>
</div>

            </div>
        </div>
    );
}

export default Nosotras;
