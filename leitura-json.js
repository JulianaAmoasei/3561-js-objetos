const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

console.log(estudante.nome);
console.log(stringEstudante.nome);

const objetoEstudante = JSON.parse(stringEstudante);
console.log(typeof objetoEstudante);
console.log(objetoEstudante.nome);