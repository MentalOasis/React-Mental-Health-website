
// mongoose
const mongoose = require("mongoose")

// crear el schema

const questionSchema = mongoose.Schema({
    titulo: String,
    opcionA: String,
    opcionB: String,
    opcionC: String,
    opcionD: String,
    correcta: String
})

// crear el modelo
// ES IMPORTANTE LA MAYUSCULA! y que sea singular User --> users en mongodb

const Question = mongoose.model("Question", questionSchema)  // Modelo ****User**** hace match con colección ***users*** en la base de datos

module.exports = Question