const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
  return lista.filter((item) => {
    return !item.endereco.hasOwnProperty(propriedade)
  })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);