
const express = require('express');
const mongoose = require('mongoose');

const Question = require("../../models/question.models");

const verificarRespuesta = async (req, res) => {
  const { preguntaId, respuestaUsuario } = req.body;

  try {
      // Buscar la pregunta por su ID en la base de datos
      const pregunta = await Question.findById(preguntaId);

      if (!pregunta) {
          return res.status(404).json({ message: "Pregunta no encontrada" });
      }

      // Verificar si la respuesta del usuario es correcta
      if (pregunta.correcta === respuestaUsuario) {
          // Respuesta correcta
          return res.status(200).json({
              message: "Respuesta correcta",
              error: false
          });
      } else {
          // Respuesta incorrecta
          return res.status(200).json({
              message: "Respuesta incorrecta",
              error: true
          });
      }
  } catch (error) {
      console.error("Error al verificar respuesta:", error);
      return res.status(500).json({ message: "Error al verificar respuesta" });
  }
};

module.exports = {verificarRespuesta};


// // Controlador para verificar la respuesta
// const checkAnswer = async (req, res) => {
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
//             message: isCorrect ? "Respuesta correcta" : "Respuesta incorrecta",
//             status: 200,
//             error: false,
//             data: { isCorrect }
//         });
//     } catch (error) {
//         console.error('Error al verificar la respuesta:', error);
//         res.status(500).json({
//             message: "Error interno del servidor",
//             status: 500,
//             error: true,
//             data: null
//         });
//     }
// }


// module.exports = checkAnswer;

// // Ejemplo con JavaScript fetch API
// const answerQuestion = async (questionId, userAnswer) => {
//     try {
//       const response = await fetch('/api/questions/answer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ questionId, userAnswer }),
//       });
  
//       const data = await response.json();
//       console.log(data); // Aquí puedes manejar la respuesta del servidor (por ejemplo, mostrar un mensaje al jugador)
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // Llamada a la función para enviar la respuesta del jugador
//   const questionId = 'id_de_la_pregunta'; // Aquí debes tener el ID real de la pregunta
//   const userAnswer = 2; // Ejemplo de respuesta seleccionada por el usuario (debe ser el índice de la opción seleccionada)
//   answerQuestion(questionId, userAnswer);