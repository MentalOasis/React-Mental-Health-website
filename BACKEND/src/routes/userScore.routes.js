const express = require('express');
const router = express.Router();
const updateScore  = require('../controllers/user/user.updateScore');
const getUserScore = require('../controllers/user/user.getScore');


router.get('/:userId/getscore', getUserScore);
// Ruta para actualizar el puntaje de un usuario
router.post('/:userId/putscore', updateScore);

  

module.exports = router;
