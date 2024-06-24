
const mongoose = require("mongoose")
const mongoUri = process.env.MONGO_URL;

const dbConnection = async () => {

    try {
         // intenta hacer algo
         // esta conexión a la base de datos es asincrona   ------>>>>> se ejecuta en paralelo
         
    await mongoose.connect(mongoUri)
    console.log("Database connected")

    } catch (error) {
        // si no puedes, capturar el error
        console.log(error)
    }
}

module.exports = dbConnection