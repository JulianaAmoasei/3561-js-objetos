const estudantes = require('./estudantes.json');

function ordena(lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
  })
}

const listaOrdemAlfabetica = ordena(estudantes, 'nome');
console.log(listaOrdemAlfabetica);