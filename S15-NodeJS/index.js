
const axios = require('axios');

let characters = async () => {
    let resultados = await axios.get('https://dragon-ball-api.herokuapp.com/api/')
    console.log(resultados.Spain);
}

characters();
console.log()