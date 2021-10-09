
const axios = require('axios');

class User {

    login() {
        let mensaje = {
            bienvenida: "hola"
        }
        return mensaje;
    }

    logout() {
        let mensaje = {
            despedida: "al horno a por chocolate"
        }
        return mensaje;
    }

    async perfil() {
        let respuesta = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return respuesta.data;
    }
}


let userController = new User();
module.exports = userController;