

// const Question = require("../../models/question.models");

// // controlador para obtener lista de usuarios


// const showPregunta = async (req, res) => {

//     const listaPreguntas = await Question.find({})

//     res.status(200).json({
//         message: "Lista de usuarios",
//         status: 200,
//         error: false,
//         data: listaPreguntas
//     })
// }

// // module.exports = showPregunta;

// const Question = require("../../models/question.models");

// const getRandomQuestion = async (req, res) => {
//     try {
//         // Obtener una pregunta aleatoria de la colección
//         const count = await Question.countDocuments();
//         const random = Math.floor(Math.random() * count);
//         const randomQuestion = await Question.findOne().skip(random);

//         if (!randomQuestion) {
//             return res.status(404).json({
//                 message: "No se encontró ninguna pregunta.",
//                 status: 404,
//                 error: true
//             });
//         }

//         res.status(200).json({
//             message: "Pregunta obtenida exitosamente.",
//             status: 200,
//             error: false,
//             data: randomQuestion
//         });
//     } catch (err) {
//         console.error("Error al obtener pregunta aleatoria:", err);
//         res.status(500).json({
//             message: "Error al obtener pregunta aleatoria.",
//             status: 500,
//             error: true
//         });
//     }
// };
// const Question = require("../../models/question.models");

// const validarRespuesta = async (req, res) => {
//     const { preguntaId, respuestaSeleccionada } = req.body;

//     try {
//         // Buscar la pregunta por su ID en la base de datos
//         const pregunta = await Question.findById(preguntaId);

//         if (!pregunta) {
//             return res.status(404).json({
//                 message: "Pregunta no encontrada.",
//                 status: 404,
//                 error: true
//             });
//         }

//         // Obtener la respuesta correcta desde la base de datos
//         const respuestaCorrecta = pregunta.correcta;

//         // Comparar la respuesta seleccionada con la respuesta correcta
//         const esCorrecta = (respuestaSeleccionada === respuestaCorrecta);

//         // Preparar la respuesta
//         let mensaje = esCorrecta ? "Respuesta correcta." : "Respuesta incorrecta.";
//         let valorAsignado = esCorrecta ? 10 : 0; // Ejemplo de asignación de valor

//         res.status(200).json({
//             message: mensaje,
//             status: 200,
//             error: false,
//             correcta: esCorrecta,
//             valorAsignado: valorAsignado
//         });
//     } catch (err) {
//         console.error("Error al validar respuesta:", err);
//         res.status(500).json({
//             message: "Error al validar respuesta.",
//             status: 500,
//             error: true
//         });
//     }
// };

// module.exports = validarRespuesta;

// module.exports = getRandomQuestion;


// controllers/questionController.js
// controllers/questionController.js

//--------------------------------------------------------------------------------------------------------


// const Question = require("../../models/question.models");

// // Controlador para obtener una pregunta al azar
// const showPregunta = async (req, res) => {
//     try {
//         const count = await Question.countDocuments();
//         const random = Math.floor(Math.random() * count);
//         const randomQuestion = await Question.findOne().skip(random);

//         if (!randomQuestion) {
//             return res.status(404).json({
//                 message: "No hay preguntas disponibles",
//                 status: 404,
//                 error: true,
//                 data: null
//             });
//         }

//         res.status(200).json({
//             message: "Pregunta aleatoria",
//             status: 200,
//             error: false,
//             data: randomQuestion
//         });
//     } catch (error) {
//         console.error('Error al obtener pregunta:', error);
//         res.status(500).json({
//             message: "Error interno del servidor",
//             status: 500,
//             error: true,
//             data: null
//         });
//     }
// };

// // Controlador para verificar una respuesta
// const verifyAnswer = async (req, res) => {
//     const { questionId, userAnswer } = req.body;

//     try {
//         const question = await Question.findById(questionId);

//         if (!question) {
//             return res.status(404).json({
//                 message: "Pregunta no encontrada",
//                 status: 404,
//                 error: true,
//                 data: null
//             });
//         }

//         const isCorrect = question.correcta === userAnswer;

//         res.status(200).json({
//             message: "Respuesta verificada",
//             status: 200,
//             error: false,
//             data: { isCorrect }
//         });
//     } catch (error) {
//         console.error('Error al verificar respuesta:', error);
//         res.status(500).json({
//             message: "Error interno del servidor",
//             status: 500,
//             error: true,
//             data: null
//         });
//     }
// };

// module.exports = { showPregunta, verifyAnswer };


//---------------------------------------------------------------------------------------------------------------------------
// version antigua mostrar todas

const Questions = require("../../models/question.models");

// controlador para obtener lista de usuarios


const showPregunta = async (req, res) => {
    try{ 

    const listaPreguntas = await Questions.find({})

    res.status(200).json({
        message: "Lista de preguntas",
        status: 200,
        error: false,
        data: listaPreguntas
    })
     } catch (error){
        console.error("error al obtener preguntas:", error)
        res.status(500).json({ message: 'Error al obtener preguntas' });

     }
}

module.exports = showPregunta;
