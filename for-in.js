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

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`;
    console.log(texto);
  }
}

// console.log(estudante['nome']);