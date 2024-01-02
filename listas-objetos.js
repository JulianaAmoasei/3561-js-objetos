const estudante = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com',
  telefones: ['551198745632', '551198745633'],
};

estudante.enderecos = [{
  rua: 'Rua Joseph Climber',
  numero: '45',
  complemento: 'apto 43',
}]

estudante.enderecos.push({
  rua: 'Rua Dona Clotilde',
  numero: '71',
  complemento: null,
})

console.log(estudante.enderecos);

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.complemento);
console.log(listaEnderecosComComplemento);