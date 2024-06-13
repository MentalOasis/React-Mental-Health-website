import React from "react";

const TarjetaLectura = () => {
    return(

        <div className="row">
            <div className="col-4 mt-5 text-start offset-md-1 textosTL">
                <h3 className="fw-semibold">Lectura</h3>
                <p className="mt-5">Lectura de libros para la relajación y el crecimiento personal.</p>
            </div>
            <div className="row mt-3 mb-5">
                <div className="offset-md-1 col-md-10">
                    <div id="tarjeta2TL" className="card textoDestacado">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/pic/imagenLectura.jpg" className="img-fluid imgTLectura"/>
                                </div>
                                <div className="col-8">
                                    <h5 className="card-title text-start mb-4 fw-semibold">Beneficios de lectura</h5>
                                    <p className="text-start">La lectura puede reducir la ansiedad, mejorar la concentración y
                                        aumentar la empatía.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default TarjetaLectura;