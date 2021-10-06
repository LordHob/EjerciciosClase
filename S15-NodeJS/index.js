
const axios = require('axios');

let jokes = async () => {
    let resultados = await axios.get('https://api.chucknorris.io/jokes/random')
    console.log(resultados.data);
}

jokes()