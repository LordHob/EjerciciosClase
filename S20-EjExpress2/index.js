
//ENTORNO
const express = require('express');

const app = express();

const port = 3000;

const router = require('./router.js');

app.use(router);

//ALGORITMO
app.listen(port, () => console.log(`Servidor levantado y rulando el puerto ${port}`));
