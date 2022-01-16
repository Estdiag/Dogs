const { Router } = require("express");
const { Dog } = require("../models/Dog");
const { Temperament } = require("../models/Temperament");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
