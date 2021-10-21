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

const movies = require('./models/MoviesModel');

app.get('/', (req, res) => {
    let date = new Date();
    console.log(`home route works ---- ${date}`);
    res.send('Bienvenidos a Express');
});

// End-points CRUD movies

app.get('/movies/', (req, res) => {
    let date = new Date();
    res.json(movies.findAll());
})

app.get('/movies/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id;
    // let movie = movies.find(movie => movie.id == id);
    res.json(movies.findById(id));
});

app.post('/movies/', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    // const { id, title } = req.body; ESTA LINEA ES LO MISMO QUE LAS 2 de ARRIBA
    const movie = { id, title };
    // movies.push(movie);
    res.json(movies.post(movie));
})

app.put('/movies/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    // const { id } = req.params; LO MISMO QUE ARRIBA
    // const { title } = req.body;
    // let movieList = movies.filter(movie => movie.ed != id);
    // let movie = { id, title };
    // movieList.push(movie);
    // movies = movieList;
    res.json(movies.update({id,...body}));
})

app.delete('/movies/:id', (req, res) => {
    const id = req.params.id;
    // let movieList = movies.filter(movie => movie.id != id);
    // movies = movieList;
    res.json(movies.delete(id));
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`.zebra);
})