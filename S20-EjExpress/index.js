

// ENTORNO //

const express = require('express');

const app = express("./router.js");

const port = 3000;

const router = require('./router')


app.use(router)

// ALGORITMO //

app.listen(port, ()=> console.log('Servidor levantado en el puerto $3000'))