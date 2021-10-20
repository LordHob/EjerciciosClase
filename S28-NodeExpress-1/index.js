const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');

const app = express();
const PORT = 3000;

//Middleware
// app.use(morgan('combined')); OPCION 1
// app.use(morgan('dev')); OTRA OPCIÓN 
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

let movies = [
    { id: 1, title: "Soy Leyenda" },
    { id: 2, title: "El Risas" },
    { id: 3, title: "Yo Robot" },
    { id: 4, title: "El Hoyo" }
];

app.get('/', (req, res) => {
    let date = new Date();
    console.log(`home route works ---- ${date}`);
    res.send('Bienvenidos a Express');
});

// End-points CRUD movies

app.get('/movies/', (req, res) => {
    let date = new Date();
    res.json(movies);
})

app.get('/movies/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    let movie = movies.find(movie => movie.id == id);
    res.json(movie);
})

app.post('/movies/', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    // const { id, title } = req.body; ESTA LINEA ES LO MISMO QUE LAS 2 de ARRIBA
    const movie = { id, title };
    movies.push(movie);
    res.json(movie);
})

app.put('/movies/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    // const { id } = req.params; LO MISMO QUE ARRIBA
    // const { title } = req.body;
    let movieList = movies.filter(movie => movie.ed != id);
    let movie = { id, title };
    movieList.push(movie);
    movies = movieList;
    res.json(movie);
})

app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    let movieList = movies.filter(movie => movie.id != id);
    movies = movieList;
    res.send(`Registro ${id} eliminado`);
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
})