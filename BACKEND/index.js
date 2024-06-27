
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Importar rutas
const authRoutes = require('./src/routes/usuario/authRoutes');
const guestRoutes = require('./src/routes/usuario/guestRoutes');
const forgotPasswordRoutes = require('./src/routes//usuario/forgotPasswordRoutes.js'); 
const passwordRoutes = require('./src/routes/usuario/password');
const routerQuestion = require('./src/routes/question.routes');
const userScoreRoutes = require('./src/routes/userScore.routes');

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => console.log('Base de datos conectada'))
.catch((err) => console.error('Error al conectar a la base de datos:', err));

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Habilitar CORS globalmente
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // Ajustar según tu configuración de frontend
}));

// Rutas

app.use('/password', passwordRoutes); // Rutas para recuperación y restablecimiento de contraseña
app.use('/api/admin', routerQuestion); // Rutas para preguntas
app.use('/api/user', userScoreRoutes); // Rutas para puntajes de usuarios

// Rutas
app.use('/', authRoutes); // Rutas para autenticación
app.use('/api/guests', guestRoutes); // Ruta para invitado
app.use('/api', forgotPasswordRoutes); // Rutas para restablecimiento de contraseña
app.use('/api', forgotPasswordRoutes); //Ruta para volver a tener contraseña nueva

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
