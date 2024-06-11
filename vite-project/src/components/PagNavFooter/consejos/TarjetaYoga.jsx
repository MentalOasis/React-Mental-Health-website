import React from "react";

const TarjetaYoga = () => {
    return(
        <div className="row mt-5">
            <div className="col-4 text-center offset-md-1 textos">
                <h3 className="text-start fw-semibold">Yoga</h3>
                <p className="mt-5 text-start">Practica yoga para el bienestar físico y mental</p>
            </div>
            <div className="row mt-3 mb-5">
                <div className="offset-md-1 col-md-5">
                    <div id="tarjeta" className="card textoDestacado">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/pic/Designer (47).jpeg" alt="100px" className="img-fluid"/>
                                </div>
                                <div className="col-8">
                                    <h5 className="card-title text-start mb-4 fw-semibold">Descubre el Mundo Yoga</h5>
                                    <p className="text-start">Es excelente para desbloquear emociones, superar miedos y soltar
                                        ansiedades y tensiones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img id="imagen2" src="/pic/Designer (52).jpeg" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}



export default TarjetaYoga;