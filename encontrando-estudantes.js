const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Kirby');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInformacao(estudantes, 'telefone', '4733865848');
console.log(telefoneEncontrado);