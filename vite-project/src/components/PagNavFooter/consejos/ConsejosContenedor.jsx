import React from "react";
import './Consejos.css';
import FranjaRosaSuperior from "./FranjaRosaSuperior"
import TarjetaDeportesT from "./TarjetaDeportesT"
import TarjetaLectura from "./TarjetaLectura"
import TarjetaMeditación from "./TarjetaMeditación"
import TarjetaYoga from "./TarjetaYoga"


const ConsejosContenedor = () => {
    return (
        <>
        <FranjaRosaSuperior />
        <TarjetaYoga />
        <TarjetaLectura />
        <TarjetaDeportesT/>
        <TarjetaMeditación />

        </>
        
    )

}




export default ConsejosContenedor;
