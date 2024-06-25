const express = require('express');
const router = express.Router();
const updateUserScore  = require('../controllers/user/user.updateScore');
const getUserScore = require('../controllers/user/user.getScore');

// Ruta para actualizar el puntaje de un usuario
router.put('/api/user/:userId/score', updateUserScore);
router.get('/api/user/:userId/score', getUserScore);


  
  

module.exports = router;
