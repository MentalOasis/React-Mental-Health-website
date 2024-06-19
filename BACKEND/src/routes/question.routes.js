
const express = require("express");
const showPregunta = require("../controllers/question/question.show")

const router_question = express.Router();


// // ruta para crear un usuario --- POST  
// router_question.post("/crear-pregunta", crearPregunta );  // router escucha la petición post en la ruta /crear-usuario y ejecuta la función crearUsuario

// // ruta para actualizar un usuario --- PUT
// router_question.put("/actualizar-pregunta/:id", actualizarPregunta);

// //ruta par eliminar un usuario --- DELETE
// router_question.delete("/eliminar-pregunta/:id", borrarPregunta);

// // ruta para obtener lista de usuarios --- GET
// router_question.get("/listar-preguntas", getAllpreguntas);

router_question.get("/mostrar-preguntas", showPregunta);

// clase profe, antes de tener controllers:
// router.get("/listar-usuarios", (req, res) => {
//     res.send("logica para obt lista de usuarios")
// });

module.exports = router_question; // exportamos el router para poder utilizarlo en otros archivos