import React from "react";
import "../components/PagNavFooter/consejos/Consejos.css"
import FranjaRosaSuperior from "../components/PagNavFooter/consejos/FranjaRosaSuperior"
import TarjetaDeportesT from "../components/PagNavFooter/consejos/TarjetaDeportesT"
import TarjetaLectura from "../components/PagNavFooter/consejos/TarjetaLectura"
import TarjetaMeditación from "../components/PagNavFooter/consejos/TarjetaMeditación"
import TarjetaYoga from "../components/PagNavFooter/consejos/TarjetaYoga"







const Consejos = () => {
    return(
        <>
            <FranjaRosaSuperior />
            <TarjetaYoga />
            <TarjetaLectura />
            <TarjetaDeportesT />
            <TarjetaMeditación />


        </>
    )
}

export default Consejos;