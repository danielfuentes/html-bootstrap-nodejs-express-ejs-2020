const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const usuariosController = require(path.resolve(__dirname, '../controllers/usuariosController'));

// Métodos en nuestros controladores: index - show - edit - delete 
router.get('/login', usuariosController.login);
router.get('/registro', usuariosController.registro);

module.exports = router;