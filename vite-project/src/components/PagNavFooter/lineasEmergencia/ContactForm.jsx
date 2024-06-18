
import React from 'react';
{/* <input > ----->   <input/> */}
const ContactForm = () => {
    return (
        
        <div className="row mt-5 mb-5">

        <div className="bajarTexto">
            <h6 id="bajarPrimerTextoForm" className="textoArribaFormulario">Salud</h6>
            <h2 className="textoArribaFormulario">Contáctanos</h2>
            <h6 className="textoArribaFormulario">Completa el formulario si necesitas más ayuda o información.</h6>

        </div>
       

        <div className="col-md-6">

            <img id="imagen5" src="/pic/imagen5.jpg" alt="100px" className="img-fluid"/>

        </div>


        
       

        <div className="col-md-6 mt-5">

            <form className="bajarForm">

                <div className="form-group">

                    <label for="exampleFormControlInputName">Nombre</label>

                    <input type="text" className="form-control" id="exampleFormControlInputName" placeholder="Nombre"/>

                </div>

                <div className="form-group">

                    <label for="exampleFormControlInputEmail">Correo Electrónico</label>

                    <input type="email" className="form-control" id="exampleFormControlInputEmail"
                        placeholder="name@example.com"/>

                </div>

                <div className="form-group">

                    <label for="exampleFormControlTextarea">Mensaje</label>

                    <textarea className="form-control" id="exampleFormControlTextarea" rows="5"
                        placeholder="Escribe un mensaje..."></textarea>

                </div>

            </form>
            <button id="botónEnviar" type="button" className="btn btn-dark">Enviar</button>

        </div>

    </div>


    )
}

export default ContactForm;
