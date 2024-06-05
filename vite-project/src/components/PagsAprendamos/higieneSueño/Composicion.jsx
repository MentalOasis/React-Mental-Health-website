import React from 'react';
import Estrella from './Estrella';
import { hideRectangle } from './funcion.js';
import './sueño.css';

const Consejos = [
    { symbol: "sentiment_stressed", text: `No mire el reloj cuando despierte en la noche.` },
    { symbol: "sentiment_dissatisfied", text: `Procurar un ambiente silencioso, oscuro y con temperatura agradablemente baja 16º a 20º en el dormitorio.` },
    { symbol: "home", text: `Evitar situaciones de actividad (trabajo, planes para el día siguiente o ejercicio físico intenso), en las horas próximas a dormir.` },
    { symbol: "sentiment_worried", text: `Si despierta a medianoche no permanezca en cama si no está durmiendo. Si pasa un tiempo prudente sin volver a conciliar el sueño es preferible levantarse y volver a la cama sólo si tiene sueño y repetir este ciclo todas las veces que sea necesario. Al cabo de uno o dos días su cerebro “se rendirá” de intentar estar despierto en la noche` },
    { symbol: "recommend", text: `Evite resolver problemas y planificar actividades mientras esté en cama. Si tiene cosas pendientes déjalas anotadas antes de irse a dormir` },
    { symbol: "recommend", text: `Evitar cenas abundantes y excesivamente condimentadas.` },
    { symbol: "recommend", text: `Levantarse de la cama en cuanto despierte en la mañana. No se quede leyendo el diario ni tome desayuno en cama.` },
    { symbol: "recommend", text: `Mantener horario estable para levantarse (reloj despertador a la misma hora) y no regresar a la cama.` },
    { symbol: "recommend", text: `Procure dejar un tiempo de “tranquilidad” antes de acostarse a dormir. Tome unos 15 a 20 minutos para ir pasando del ambiente de actividad a uno de tranquilidad, bajando la intensidad de la luz, apagando televisor entre otras cosas. Ocupe ese tiempo en relajarse o realizar sus rutinas de higiene en el baño.` },
    { symbol: "recommend", text: `Evitar estimulantes (café, bebidas, nicotina, té, cacao, alcohol).` },
    { symbol: "recommend", text: `Evitar la automedicación.` },
    { symbol: "recommend", text: `Evitar ver TV en la cama o usar equipos con pantalla; idealmente sacar el televisor del dormitorio.` },
    { symbol: "recommend", text: `Eliminar siestas.` },
    { symbol: "recommend", text: `Entrar al dormitorio y acostarse cuando tenga sueño, no por horario. En espera del sueño puede leer (excluídos temas relacionados con su actividad laboral o académica) o escuchar música suave en el living o sala de estar.` },
    { symbol: "recommend", text: `Apague el computador temprano, idealmente no más allá de las 21 horas. También desconéctese del teléfono temprano.` },
    { symbol: "recommend", text: `No utilizar la cama para trabajar o recrearse.` },
];




const Composicion = () => {
    const filas = [
        [0, 1],      // 2 estrellas
        [2, 3, 4],   // 3 estrellas
        [5, 6],      // 2 estrellas
        [7, 8, 9],   // 3 estrellas
        [10, 11],    // 2 estrellas
        [12, 13],    // 2 estrellas
        [14, 15]     // 2 estrellas
    ];

    return (
        <div className="container">
            <h1 className="titulo-sueño"> Higiene Del Sueño</h1>
            {filas.map((fila, filaIndex) => (
                <div className={`stars-row ${fila.length === 3 ? 'stars-3' : 'stars-2'}`} key={filaIndex}>
                    {fila.map(index => (
                        <Estrella
                            consejo={Consejos[index]}
                            index={index}
                            key={index}
                            claseEstrella={fila.length === 3 ? 'star1' : 'star2'}
                            hideRectangle={() => hideRectangle(index)}
                        />
                    ))}
                </div>
            ))}
            <div className="rectangle" id="rectangle" onClick={hideRectangle}>
                <p>¡Hola! Soy un rectángulo con texto adentro.</p>
            </div>
        </div>
    );
}

export default Composicion;
