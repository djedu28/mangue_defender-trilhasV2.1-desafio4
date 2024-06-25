const express = require('express');
const api = express.Router();

require('./database');        // Conectando ao BD
// require('./utils/logger.js'); // Ativando LOGGER

// Importando rotas
const userRoutes = require('./routes/userRoutes.js');
const exemploRoutes = require('./routes/exemploRoutes.js');

// Definir rotas importadas
api.use(["/users", "/usuarios"], userRoutes);
api.use('/exemplos', exemploRoutes);

module.exports = api
