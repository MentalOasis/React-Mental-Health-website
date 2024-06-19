

const Question = require("../../models/question.models");

// controlador para obtener lista de usuarios


const showPregunta = async (req, res) => {

    const listaPreguntas = await Question.find({})

    res.status(200).json({
        message: "Lista de usuarios",
        status: 200,
        error: false,
        data: listaPreguntas
    })
}

module.exports = showPregunta;