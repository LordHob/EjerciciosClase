const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
const PORT = 3000;

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

let fabricantes = [
    { id: 1, nombre: "HP"},
    { id: 2, nombre: "Lenovo" },
    { id: 3, nombre: "MSI" },
    { id: 4, nombre: "Asus" }
];

let articulos = [
    { id: 1, nombre: "Lector de DVD", precio: 30, fabricante: 1 },
    { id: 2, nombre: "Placa base", precio: 150, fabricante: 2 },
    { id: 3, nombre: "Tarjeta gráfica", precio: 499, fabricante: 3 },
    { id: 4, nombre: "Cartucho impresora", precio: 20, fabricante: 5 }
];

app.get('/', (req, res) => {
    let date = new Date();
    console.log(`home route works ---- ${date}`);
    res.send('Bienvenidos a Express');
});

app.get('/fabricantes/', (req, res) => {
    let date = new Date();
    res.json(fabricantes);
})

app.get('/articulos/', (req, res) => {
    let date = new Date();
    res.json(articulos);
})

app.get('/fabricantes/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    let fabricante = fabricantes.find(fabricante => fabricante.id == id);
    res.json(fabricante);
})

app.get('/articulos/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    let articulo = articulos.find(articulo => articulo.id == id);
    res.json(articulo);
})

app.post('/fabricantes', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    // const { id, nombre } = req.body; ESTA LINEA ES LO MISMO QUE LAS 2 de ARRIBA
    const fabricante = { id, nombre };
    fabricantes.push(fabricante);
    res.json(fabricante);
})

app.post('/articulos', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const fabricante = req.body.fabricante;
    // const { id, nombre, precio, fabricante  } = req.body; ESTA LINEA ES LO MISMO QUE LAS 2 de ARRIBA
    const articulo = { id, nombre, precio, fabricante };
    articulos.push(articulo);
    res.json(articulo);
})

app.put('/fabricantes', (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    let fabricanteList = fabricantes.filter(fabricante => fabricante.ed != id);
    let fabricante = { id, nombre };
    fabricanteList.push(fabricante);
    fabricantes = fabricanteList;
    res.json(fabricante);
})

app.put('/articulos', (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const fabricante = req.body.fabricante;
    let articuloList = articulos.filter(articulo => articulo.ed != id);
    let articulo = { id, nombre, precio, fabricante };
    articuloList.push(articulo);
    articulos = articuloList;
    res.json(articulo);
})

// app.delete('/movies/:id', (req, res) => {
//     const { id } = req.params;
//     let movieList = movies.filter(movie => movie.id != id);
//     movies = movieList;
//     res.send(`Registro ${id} eliminado`);
// })

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.america);
})