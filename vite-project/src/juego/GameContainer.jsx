
import "./style2.css";
import Game from "./Game2.jsx";
import BotonVolver from "./BotonVolver.jsx"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameContainer = () => {
    const [preguntas, setPreguntas] = useState([]);
    const [preguntaActual, setPreguntaActual] = useState(null);
    const [score, setScore] = useState(0);
    const userId = localStorage.getItem('userId'); // Obtener el userId desde localStorage

    useEffect(() => {
        cargarPreguntas();
    }, []);

    const cargarPreguntas = async () => {
        try {
            const preguntasFromServer = await obtenerPreguntas();
            setPreguntas(preguntasFromServer);
        } catch (error) {
            console.error('Error al cargar las preguntas:', error);
        }
    };

    const obtenerPreguntas = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/admin/mostrar-preguntas');
            return response.data.data; // Asumiendo que la respuesta tiene la estructura { data: { data: [...] } }
        } catch (error) {
            console.error('Error al obtener preguntas:', error);
            return [];
        }
    };

    const mostrarPreguntaAleatoria = () => {
        const pregunta = obtenerPreguntaAleatoria();
        setPreguntaActual(pregunta);
        mostrarElementosDePregunta(pregunta);
    };

    const obtenerPreguntaAleatoria = () => {
        const index = Math.floor(Math.random() * preguntas.length);
        return preguntas[index];
    };

    const mostrarElementosDePregunta = (pregunta) => {
        const questionElem = document.getElementById('question');
        const optionAElem = document.getElementById('optionA');
        const optionBElem = document.getElementById('optionB');
        const optionCElem = document.getElementById('optionC');
        const optionDElem = document.getElementById('optionD');

        questionElem.innerText = pregunta.titulo;
        optionAElem.innerText = pregunta.opcionA;
        optionBElem.innerText = pregunta.opcionB;
        optionCElem.innerText = pregunta.opcionC;
        optionDElem.innerText = pregunta.opcionD;

        document.getElementById('question-container').style.display = 'block';
    };

    const handleRespuestaClick = async (respuesta) => {
        try {
            if (!preguntaActual) {
                console.error('No hay pregunta actual definida');
                return;
            }

            const response = await axios.post('http://localhost:8000/api/verificar-respuesta', {
                preguntaId: preguntaActual._id,
                respuestaUsuario: respuesta
            });

            const isCorrect = response.data.data.isCorrect;

            if (isCorrect) {
                // Actualizar puntaje localmente en el frontend
                const nuevoPuntaje = score + 1; // Incrementar el puntaje
                setScore(nuevoPuntaje);

                // Mostrar feedback visual al usuario (opcional)
                console.log('Respuesta correcta. Puntaje actualizado:', nuevoPuntaje);

                // Actualizar el puntaje en el backend
                const puntajeActualizado = await actualizarPuntajeEnBackend(nuevoPuntaje);
                console.log('Puntaje actualizado en el backend:', puntajeActualizado);
            } else {
                // Manejar caso de respuesta incorrecta (opcional)
                console.log('Respuesta incorrecta');
            }

            document.getElementById('question-container').style.display = 'none';
        } catch (error) {
            console.error('Error al verificar respuesta:', error);
        }
    };

    // const actualizarPuntajeEnBackend = async (nuevoPuntaje) => {
    //     try {
    //         const response = await axios.put(`http://localhost:8000/api/user/${userId}/score`, {
    //             score: nuevoPuntaje
    //         });

    //         const updatedUser = response.data; // Suponiendo que el backend devuelve el usuario actualizado con el nuevo puntaje
    //         return updatedUser.score;
    //     } catch (error) {
    //         console.error('Error al actualizar puntaje en el backend:', error);
    //         return null;
    //     }
    // };

    

    return (
        <>
            <div id="game-container" tabIndex="0">
                <div id="question-container" style={{ display: "none" }}>
                    <div id="question"></div>
                    <button className="option-btn" id="optionA" onClick={() => handleRespuestaClick('opcionA')}></button>
                    <button className="option-btn" id="optionB" onClick={() => handleRespuestaClick('opcionB')}></button>
                    <button className="option-btn" id="optionC" onClick={() => handleRespuestaClick('opcionC')}></button>
                    <button className="option-btn" id="optionD" onClick={() => handleRespuestaClick('opcionD')}></button>
                </div>
                <Game />
                <BotonVolver/>
            </div>
            <button onClick={mostrarPreguntaAleatoria}>Mostrar Pregunta Aleatoria</button>
        </>
    );
};

export default GameContainer;


