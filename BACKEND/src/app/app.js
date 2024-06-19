
const express = require('express')
const morgan = require('morgan');
const router = require('../routes/user.routes');
const router_question = require('../routes/question.routes');
const app = express()

const cors = require("cors");

app.use(cors()); // para que el servidor pueda recibir peticiones de otros servidores
// definimos middlewares
app.use(morgan("dev")); // para ver las peticiones que se hacen al servidor, viene de la dependencia morgan
app.use(express.json()); // para que express entienda los datos que vienen en formato json
app.use(express.urlencoded({ extended: false })); // para que express entienda los datos que vienen en formato urlencoded

// definimos las rutas de la aplicación, 
// si no funciona, borrar router y escribirlo de nuevo apretando el que corresponde (con la ruta)
// app.use("/api/users", router); // definimos la ruta base para las rutas de usuario
app.use("/api/admin", router_question); // definimos la ruta base para las rutas de usuario

// clase profe que se cambio, primero request luego respuesta:
// app.use("/api/users", (req, res) => {
//     res.send("API REST GESTION DE USUARIOS")
// })


// app.get('/', (req, res) => {
//     res.send('Hola mundo!');
//     });

module.exports = app; // para poder utilizarlo en archivo externo