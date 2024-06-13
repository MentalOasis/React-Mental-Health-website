import React from "react";

const TarjetaMeditación = () => {
    return(
        <div className="row espaciadorfinalTM">
            <div className="col-4 mt-5 text-center offset-md-1 textos espaciotexto">
                <h3 className="text-start fw-semibold">Meditación</h3>
                <p className="mt-5 text-start">Practicar la meditación para la calma interior y la claridad.</p>
            </div>

            <div className="row mt-3 mb-5">
                <div className="offset-md-1 col-md-5">
                    <div className="card textoDestacado">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/pic/Designer (20).jpeg" alt="Descripción de la imagen" className="img-fluid"/>
                                </div>
                                <div className="col-8">
                                    <h5 className="card-title text-start mb-4 fw-semibold">Beneficios de la meditación</h5>
                                    <p className="text-start">La meditación puede reducir la ansiedad, mejorar la autoconciencia
                                        y promover la salud emocional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="imagenFinalTM" className="col-md-5">
                    <img src="/pic/Designer (91).jpeg" alt="100px" width="400px"/>
                </div>
            </div>
        </div>



    )
}



export default TarjetaMeditación;