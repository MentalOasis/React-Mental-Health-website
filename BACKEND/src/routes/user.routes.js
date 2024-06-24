const express = require('express');
const router = express.Router();
const updateUserScore  = require('../controllers/user/user.score');

// Ruta para actualizar el puntaje de un usuario
router.put('/api/user/:userId/score', updateUserScore);

module.exports = router;
