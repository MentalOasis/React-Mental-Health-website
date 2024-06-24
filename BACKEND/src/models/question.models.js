
// mongoose
const mongoose = require("mongoose")

// crear el schema

const questionSchema = mongoose.Schema({
    titulo: {type: String, required: true},
    opcionA: {type: String, required: true},
    opcionB: {type: String, required: true},
    opcionC: {type: String, required: true},
    opcionD: {type: String, required: true},
    correcta: {type: String, required: true},
})

// crear el modelo
// ES IMPORTANTE LA MAYUSCULA! y que sea singular User --> users en mongodb

const Question = mongoose.model("Question", questionSchema)  // Modelo ****User**** hace match con colección ***users*** en la base de datos

module.exports = Question