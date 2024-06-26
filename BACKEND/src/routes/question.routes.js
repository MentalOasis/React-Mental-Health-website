
const express = require("express");
const showPregunta = require("../controllers/question/question.show")
const router_question = express.Router();
const {verificarRespuesta} = require("../controllers/question/question.correcta");
const verificarToken = require('../middleware/verificarToken');


// // ruta para crear un usuario --- POST  
// router_question.post("/crear-pregunta", crearPregunta );  // router escucha la petición post en la ruta /crear-usuario y ejecuta la función crearUsuario

// // ruta para actualizar un usuario --- PUT
// router_question.put("/actualizar-pregunta/:id", actualizarPregunta);

// //ruta par eliminar un usuario --- DELETE
// router_question.delete("/eliminar-pregunta/:id", borrarPregunta);

// // ruta para obtener lista de usuarios --- GET
// router_question.get("/listar-preguntas", getAllpreguntas);

router_question.get("/mostrar-preguntas", showPregunta);

// Ruta para verificar la respuesta del usuario
router_question.post('/verificar-respuesta',  verificarRespuesta, verificarToken);

// clase profe, antes de tener controllers:
// router.get("/listar-usuarios", (req, res) => {
//     res.send("logica para obt lista de usuarios")
// });

// // Ruta para obtener una pregunta aleatoria
// router.get('/question', async (req, res) => {
//     try {
//       const count = await Question.countDocuments();
//       const randomIndex = Math.floor(Math.random() * count);
//       const question = await Question.findOne().skip(randomIndex);
  
//       res.json(question);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });
  
//   // Ruta para validar la respuesta del usuario
//   router.post('/answer', async (req, res) => {
//     const { questionId, userAnswer } = req.body;
  
//     try {
//       const question = await Question.findById(questionId);
  
//       if (!question) {
//         return res.status(404).json({ msg: 'Pregunta no encontrada' });
//       }
  
//       const correctAnswerIndex = question.correctAnswerIndex;
  
//       if (userAnswer === correctAnswerIndex) {
//         // Aquí puedes implementar la lógica para otorgar puntaje al jugador
//         res.json({ correct: true, message: 'Respuesta correcta' });
//       } else {
//         res.json({ correct: false, message: 'Respuesta incorrecta' });
//       }
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });



// const getRandomQuestion = require("../controllers/questionController");

// // Ruta para obtener una pregunta aleatoria
// router.get("/pregunta-aleatoria", getRandomQuestion);

// const validarRespuesta = require("../controllers/questionController");

// // Ruta para validar la respuesta del usuario
// const { getRandomQuestion, validarRespuesta } = require('../controllers/questionController');
// router.get('/getRandomQuestion', getRandomQuestion);
// router.post('/validarRespuesta', validarRespuesta);

module.exports = router_question; // exportamos el router para poder utilizarlo en otros archivos