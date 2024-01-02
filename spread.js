const estudante = {
  nome: 'Ana',
  idade: 32,
  cpf: '23423423423',
  email: 'ana@email.com',
  telefones: ['551198745632', '551198745633'],
  enderecos: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43',
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null,
  }],
};

// function exibirTelefones(telefone1, telefone2) {
//   console.log(`ligar para ${telefone1}`);
//   console.log(`ligar para ${telefone2}`);
// }

// exibirTelefones(...estudante.telefones);

const dadosEnvio = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0],
}

console.log(dadosEnvio);