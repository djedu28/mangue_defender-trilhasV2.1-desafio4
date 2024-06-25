const express = require('express');

// require('./database');        // Conectando ao BD
// require('./utils/logger.js'); // Ativando LOGGER

const api = require('./api.js');

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 3110

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use('/favicon.ico', express.static('public/favicon.ico'));

// Rotas
app.use("/ping", (req, res) => {
    res.json({ "pint": "pong" });
});

app.use("/api", api)

app.listen(PORT, ()=>{
    console.log('No Ar!', 'Na porta:', PORT)
    console.log(`Acesse: http://${HOST}:${PORT}`)
    // console.log("CONFIG:EDU =", process.env.EDU)
    // console.log("CONFIG:BD  =", process.env.BD)
    //console.log("CONFIG:JWT_EXPIRES_IN =", process.env.JWT_EXPIRES_IN)
});
