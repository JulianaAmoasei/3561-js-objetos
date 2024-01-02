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

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
  console.error('é necessário ter um endereço cadastrado')
}
