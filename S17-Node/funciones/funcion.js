
const funcionSuma = (num1, num2) => {
    return console.log(num1 + num2);
}

const funcionRandomizar = () => {
    let x = Math.floor((Math.random() * 10) + 1);
    return console.log(x)
}

module.exports = {
    funcionSuma,
    funcionRandomizar,
}