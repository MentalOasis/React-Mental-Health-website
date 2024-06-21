
// const app = require('./src/app/app.js');
// const dbConnection = require('./src/database/database_preguntas');



// app.listen(7000, () => {
//   console.log('Server on port 7000');
// });

// dbConnection();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const guestRoutes = require('./routes/guestRoutes');
const passwordRoutes = require('./routes/password');

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true // Necesario para evitar MongoParseError
})
    .then(() => console.log('Base de datos conectada'))
    .catch((err) => console.error('Error al conectar a la base de datos:', err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Habilitar CORS globalmente
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174' // Ajustar según tu configuración de frontend
}));

// Rutas
app.use('/', authRoutes); // Rutas para autenticación
app.use('/api/guests', guestRoutes); // Rutas para invitados
app.use('/password', passwordRoutes); // Rutas para recuperación y restablecimiento de contraseña

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));