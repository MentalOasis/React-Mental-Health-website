
const mongoose = require('mongoose');
const UserModel = require('../models/user');
const mongoose = require('mongoose');
const UserModel = require('../models/user');

// Conectarse a la base de datos
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true, // Añadido para evitar advertencia de deprecación
})
.then(() => {
    console.log('Conectado a la base de datos');
    
    // Define el usuario administrador inicial
    const adminUser = new UserModel({
        name: 'Administrador',
        email: 'admin@example.com',
        password: 'tu_contraseña_segura',
        isAdmin: true
    });

    // Guarda el usuario administrador en la base de datos
    adminUser.save()
        .then(() => {
            console.log('Usuario administrador creado exitosamente');
            mongoose.connection.close();
        })
        .catch(err => console.error(err));
})
.catch((err) => console.error('Error al conectar a la Base de datos', err));




