const estudante = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com',
  telefones: ['551198745632', '551198745633'],
};

estudante.endereco = {
  rua: 'Rua Joseph Climber',
  numero: '45',
  complemento: 'apto 43',
}

console.log(estudante);
console.log(estudante.endereco);
console.log(estudante.endereco.rua);