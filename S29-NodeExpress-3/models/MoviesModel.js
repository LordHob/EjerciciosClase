let db = require('../db');

MoviesModel = {};

MoviesModel.findAll = () => db;

MoviesModel.findById = (id) => db.find(movie => movie.id == id);

MoviesModel.post = (newMovie) => {
    db.push(newMovie);
    return newMovie;
}

MoviesModel.update = (newMovie) => {
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(newMovie);
    db = movies;
    return newMovie;
}

MoviesModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db = movies;
    return `Registro ${id} eliminado correctamente`;
}

module.exports = MoviesModel;